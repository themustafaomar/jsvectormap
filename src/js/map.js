import {
  merge,
  getElement,
  createElement,
  removeElement,
} from './util/index'
import Defaults from './defaults/options'
import SVGCanvasElement from './svg/canvasElement'
import MapPrototypes from './core/index'
import Events from './defaults/events'
import EventHandler from './eventHandler'
import Tooltip from './elements/tooltip'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Map {
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
    this.isBeingDragged = false

    // `document` is already ready, just initialise now
    if (document.readyState !== 'loading') {
      this.init(options.selector)
    } else {
      // Wait until `document` is ready
      window.addEventListener('DOMContentLoaded', this.init.bind(
        this, options.selector
      ))
    }
  }

  // Initialize the map
  init(selector) {
    const options = this.params

    // @TODO: We can get the selector from params `this.params.selector` but unfortunately
    // when passing a DOM element to jsVectorMap constructor, the DOM element doesn't get merged
    // with defaults during merging the options so we need to get the selector directly from the options.
    this.container = getElement(selector)

    this.container.classList.add('jvm-container')

    this.canvas = new SVGCanvasElement(
      this.container, this.width, this.height
    )

    // Set the map's background color
    this.setBackgroundColor(options.backgroundColor)

    // Handle the container
    this.handleContainerEvents()

    // Create regions
    this.createRegions()

    // Update size
    this.updateSize()

    // Create lines
    this.createLines(options.lines || {}, options.markers || {})

    // Create markers
    this.createMarkers(options.markers)

    // Handle regions/markers events
    this.handleElementEvents()

    // Position labels
    this.repositionLabels()

    // Create toolip
    if (options.showTooltip) {
      this.tooltip = new Tooltip(this)
    }

    // Create zoom buttons if `zoomButtons` is set to true
    if (options.zoomButtons) {
      this.handleZoomButtons()
    }

    // Set selected regions if any
    if (options.selectedRegions) {
      this.setSelected('regions', options.selectedRegions)
    }

    // Set selected regions if any
    if (options.selectedMarkers) {
      this.setSelected('markers', options.selectedMarkers)
    }

    // Set focus on a spcific region
    if (options.focusOn) {
      this.setFocus(options.focusOn)
    }

    // Visualize data
    if (options.visualizeData) {
      this.visualizeData(options.visualizeData)
    }

    // Bind touch events if true
    if (options.bindTouchEvents) {
      if (
        ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch)
      ) {
        this.bindContainerTouchEvents()
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

      this.createSeries()
    }

    // Fire loaded event
    this.emit('map:loaded', [this])
  }

  // Public

  emit(eventName, args) {
    for (let event in Events) {
      if (Events[event] === eventName && typeof this.params[event] === 'function') {
        this.params[event].apply(this, args)
      }
    }
  }

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color
  }

  // Markers/Regions
  getSelected(type) {
    let key, selected = []

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key)
      }
    }

    return selected
  }

  clearSelected(type) {
    this.getSelected(type).forEach(i => {
      this[type][i].element.select(false)
    })
  }

  setSelected(type, keys) {
    keys.forEach(key => {
      if (this[type][key]) {
        this[type][key].element.select(true)
      }
    })
  }

  // Region methods
  getSelectedRegions() {
    return this.getSelected('regions')
  }

  clearSelectedRegions() {
    this.getSelected('regions').forEach(code => {
      this.regions[code].element.select(false)
    })
  }

  // Markers methods
  getSelectedMarkers() {
    return this.getSelected('markers')
  }

  clearSelectedMarkers() {
    this.getSelected('markers').forEach(index => {
      this.markers[index].element.select(false)
    })
  }

  // Deprecated
  addMarker(config) {
    console.warn('`addMarker` method is depreacted, please use `addMarkers` instead.')
    this.createMarkers([config], true)
  }

  addMarkers(config) {
    if (Array.isArray(config)) {
      return this.createMarkers(config, true)
    }

    this.createMarkers([config], true);
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

  // Create line
  addLine(from, to, style = {}) {
    this.createLines([{ from, to, style }], this.markers, true)
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

    this.applyTransform()
    this.clearSelectedMarkers()
    this.clearSelectedRegions()
    this.removeMarkers()
  }

  // Destroy the map
  destroy(destroyInstance = true) {
    const eventRegistry = EventHandler.getEventRegistry()
    const keys = Object.keys

    // Remove tooltip from the DOM
    removeElement(this.tooltip.getElement())

    // Remove event registry
    keys(eventRegistry).forEach(event => {
      EventHandler.off(eventRegistry[event].selector, event, eventRegistry[event].handler)
    })

    this.emit('map:destroyed')

    // For perfomance issues remove all possible properties
    if (destroyInstance) {
      keys(this).forEach(key => {
        try {
          delete this[key]
        } catch (e) {}
      })
    }
  }

  extend(name, callback) {
    Map.prototype[name] = callback
  }
}

Map.maps = {}
Map.defaults = Defaults
Object.assign(Map.prototype, MapPrototypes)

export default Map