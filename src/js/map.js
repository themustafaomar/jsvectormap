import {
  merge,
  getLineUid,
  getElement,
  createElement,
  removeElement,
} from './util'
import Defaults from './defaults/options'
import SVGCanvasElement from './svg/canvasElement'
import MapPrototypes from './core/index'
import Events from './defaults/events'
import EventHandler from './eventHandler'
import Tooltip from './components/tooltip'
import DataVisualization from './dataVisualization'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Map {
  static maps = {}
  static defaults = Defaults

  constructor(options = {}) {
    // Merge the given options with the default options
    this.params = merge(Map.defaults, options, true)

    // Throw an error if the given map name doesn't match
    // the map that was set in map file
    if (!Map.maps[this.params.map]) {
      throw new Error(`Attempt to use map which was not loaded: ${options.map}`)
    }

    this.mapData = Map.maps[this.params.map]

    this.regions = {}
    this.markers = {}
    this.lines = {}

    this.defaultWidth = this.mapData.width
    this.defaultHeight = this.mapData.height
    this.height = 0
    this.width = 0

    this.scale = 1
    this.baseScale = 1
    this.transX = 0
    this.transY = 0
    this.baseTransX = 0
    this.baseTransY = 0

    // `document` is already ready, just initialise now
    if (document.readyState !== 'loading') {
      this._init()
    } else {
      // Wait until `document` is ready
      window.addEventListener('DOMContentLoaded', () => this._init())
    }
  }

  _init() {
    const options = this.params

    this.container = getElement(options.selector)
    this.container.classList.add('jvm-container')

    // The map canvas element
    this.canvas = new SVGCanvasElement(this.container)

    // Set the map's background color
    this.setBackgroundColor(options.backgroundColor)

    // Create regions
    this._createRegions()

    // Update size
    this.updateSize()

    // Create lines
    this._createLines(options.lines || {}, options.markers || {})

    // Create markers
    this._createMarkers(options.markers)

    // Position labels
    this._repositionLabels()

    // Setup the container events
    this._setupContainerEvents()

    // Setup regions/markers events
    this._setupElementEvents()

    // Create zoom buttons if `zoomButtons` is presented
    if (options.zoomButtons) {
      this._setupZoomButtons()
    }

    // Create toolip
    if (options.showTooltip) {
      this.tooltip = new Tooltip(this)
    }

    // Set selected regions if any
    if (options.selectedRegions) {
      this._setSelected('regions', options.selectedRegions)
    }

    // Set selected regions if any
    if (options.selectedMarkers) {
      this._setSelected('markers', options.selectedMarkers)
    }

    // Set focus on a spcific region
    if (options.focusOn) {
      this.setFocus(options.focusOn)
    }

    // Data visualization
    if (options.visualizeData) {
      this.dataVisualization = new DataVisualization(options.visualizeData, this)
    }

    // Bind touch events if true
    if (options.bindTouchEvents) {
      if (
        ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)
      ) {
        this._setupContainerTouchEvents()
      }
    }

    // Create series if any
    if (options.series) {
      this.container.appendChild(this.legendHorizontal = createElement(
        'div', 'jvm-series-container jvm-series-h'
      ))

      this.container.appendChild(this.legendVertical = createElement(
        'div', 'jvm-series-container jvm-series-v'
      ))

      this._createSeries()
    }

    // Fire loaded event
    this._emit(Events.onLoaded, [this])
  }

  _emit(eventName, args) {
    for (let event in Events) {
      if (Events[event] === eventName && typeof this.params[event] === 'function') {
        this.params[event].apply(this, args)
      }
    }
  }

  // Public

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color
  }

  // Get selected markers/regions
  _getSelected(type) {
    let key, selected = []

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key)
      }
    }

    return selected
  }

  _setSelected(type, keys) {
    keys.forEach(key => {
      if (this[type][key]) {
        this[type][key].element.select(true)
      }
    })
  }

  _clearSelected(type) {
    this._getSelected(type).forEach(i => {
      this[type][i].element.select(false)
    })
  }

  // Region methods
  getSelectedRegions() {
    return this._getSelected('regions')
  }

  clearSelectedRegions() {
    this._clearSelected('regions')
  }

  // Markers methods
  getSelectedMarkers() {
    return this._getSelected('markers')
  }

  clearSelectedMarkers() {
    this._clearSelected('markers')
  }

  addMarkers(config) {
    if (Array.isArray(config)) {
      return this._createMarkers(config, true)
    }

    this._createMarkers([config], true)
  }

  removeMarkers(markers) {
    if (!markers) {
      markers = Object.keys(this.markers)
    }

    markers.forEach(index => {
      // Remove the element from the DOM
      this.markers[index].element.remove()
      // Remove the element from markers object
      delete this.markers[index]
    })
  }

  addLine(from, to, style = {}) {
    console.warn('`addLine` method is deprecated, please use `addLines` instead.')
    this._createLines([{ from, to, style }], this.markers, true)
  }

  addLines(config) {
    const uids = this._getLinesAsUids()

    if (!Array.isArray(config)) {
      config = [config]
    }

    this._createLines(config.filter(line => {
      return !(uids.indexOf(getLineUid(line.from, line.to)) > -1)
    }), this.markers, true)
  }

  removeLines(lines) {
    if (Array.isArray(lines)) {
      lines = lines.map(line => getLineUid(line.from, line.to))
    } else {
      lines = this._getLinesAsUids()
    }

    lines.forEach(uid => {
      this.lines[uid].dispose()
      delete this.lines[uid]
    })
  }

  _getLinesAsUids() {
    return Object.keys(this.lines)
  }

  removeLine(from, to) {
    console.warn('`removeLine` method is deprecated, please use `removeLines` instead.')
    const uid = getLineUid(from, to)

    if (this.lines.hasOwnProperty(uid)) {
      this.lines[uid].element.remove()
      delete this.lines[uid]
    }
  }

  // Reset map
  reset() {
    for (let key in this.series) {
      for (let i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear()
      }
    }

    if (this.legendHorizontal) {
      removeElement(this.legendHorizontal)
      this.legendHorizontal = null
    }

    if (this.legendVertical) {
      removeElement(this.legendVertical)
      this.legendVertical = null
    }

    this.scale = this.baseScale
    this.transX = this.baseTransX
    this.transY = this.baseTransY

    this._applyTransform()
    this.clearSelectedMarkers()
    this.clearSelectedRegions()
    this.removeMarkers()
  }

  // Destroy the map
  destroy(destroyInstance = true) {
    // Remove event registry
    EventHandler.flush()

    // Remove tooltip from DOM and memory
    this.tooltip.dispose()

    // Fire destroyed event
    this._emit(Events.onDestroyed)

    // Remove references
    if (destroyInstance) {
      Object.keys(this).forEach(key => {
        try {
          delete this[key]
        } catch (e) {}
      })
    }
  }

  extend(name, callback) {
    if (typeof this[name] === 'function') {
      throw new Error(`The method [${name}] already exists internally please use another name.`)
    }

    Map.prototype[name] = callback
  }
}

Object.assign(Map.prototype, MapPrototypes)

export default Map