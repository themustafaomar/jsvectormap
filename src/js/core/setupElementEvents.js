import { getElement } from '../util/index'
import EventHandler from '../eventHandler'
import Events from '../defaults/events'

function parseEvent(map, selector, isTooltip) {
  var element = getElement(selector),
    classes = element.getAttribute('class'),
    type = classes.indexOf('jvm-region') === -1 ? 'marker' : 'region',
    code = type === 'region' ? element.getAttribute('data-code') : element.getAttribute('data-index'),
    event = `${type}:selected`

  // Init tooltip event
  if (isTooltip) {
    event = `${type}.tooltip:show`
  }

  return {
    event,
    type,
    code,
    element: type === 'region' ? map.regions[code].element : map.markers[code].element,
    tooltipText: type === 'region' ? map.mapData.paths[code].name || '' : (map.markers[code].config.name || '')
  }
}

export default function setupElementEvents() {
  const map = this, container = this.container
  let pageX, pageY, mouseMoved

  EventHandler.on(container, 'mousemove', (event) => {
    if (Math.abs(pageX - event.pageX) + Math.abs(pageY - event.pageY) > 2) {
      mouseMoved = true
    }
  })

  // When the mouse is pressed
  EventHandler.delegate(container, 'mousedown', '.jvm-element', (event) => {
    pageX = event.pageX
    pageY = event.pageY
    mouseMoved = false
  })

  // When the mouse is over the region/marker | When the mouse is out the region/marker
  EventHandler.delegate(container, 'mouseover mouseout', '.jvm-element', function (event) {
    const data = parseEvent(map, this, true)
    const showTooltip = map.params.showTooltip

    if (event.type === 'mouseover') {
      data.element.hover(true)
      map.tooltip.text(data.tooltipText)
      map._emit(data.event, [event, map.tooltip, data.code])

      if (!event.defaultPrevented) {
        if (showTooltip) {
          map.tooltip.show()
        }
      }
    } else {
      data.element.hover(false)

      if (showTooltip) {
        map.tooltip.hide()
      }
    }
  })

  // When the click is released
  EventHandler.delegate(container, 'mouseup', '.jvm-element', function (event) {
    const data = parseEvent(map, this)

    if (mouseMoved) {
      return
    }

    if (
      (data.type === 'region' && map.params.regionsSelectable) || (data.type === 'marker' && map.params.markersSelectable)
    ) {
      const element = data.element

      // We're checking if regions/markers|SelectableOne option is presented
      if (map.params[`${data.type}sSelectableOne`]) {
        map._clearSelected(`${data.type}s`)
      }

      if (data.element.isSelected) {
        element.select(false)
      } else {
        element.select(true)
      }

      map._emit(data.event, [
        data.code,
        element.isSelected,
        map._getSelected(`${data.type}s`)
      ])
    }
  })

  // When region/marker is clicked
  EventHandler.delegate(container, 'click', '.jvm-element', function (event) {
    const { type, code } = parseEvent(map, this)

    map._emit(
      type === 'region' ? Events.onRegionClick : Events.onMarkerClick,
      [event, code]
    )
  })
}