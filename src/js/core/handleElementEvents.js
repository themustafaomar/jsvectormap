import { getElement } from '../util/index'
import EventHandler from '../eventHandler'

function parseEvent(map, selector, isTooltip) {
  var ele = getElement(selector),
    elClassList = ele.getAttribute('class'),
    type = elClassList.indexOf('jvm-region') === -1 ? 'marker' : 'region',
    code = type === 'region' ? ele.getAttribute('data-code') : ele.getAttribute('data-index'),
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

export default function handleElementEvents() {
  const map = this, container = this.container

  // When the mouse is pressed
  EventHandler.delegate(container, 'mousedown', '.jvm-element', () => {
    this.isBeingDragged = false
  })

  // When the mouse is over the region/marker | When the mouse is out the region/marker
  EventHandler.delegate(container, 'mouseover mouseout', '.jvm-element', function (event) {
    const data = parseEvent(map, this, true)
    const showTooltip = map.params.showTooltip

    if (event.type === 'mouseover') {
      const defaultPrevented = event.defaultPrevented

      if (!defaultPrevented) {
        data.element.hover(true)

        if (showTooltip) {
          map.tooltip.text(data.tooltipText)
          map.tooltip.show()
          map.emit(data.event, [map.tooltip, data.code])
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

    if (map.isBeingDragged || event.defaultPrevented) {
      return
    }

    if (
      (data.type === 'region' && map.params.regionsSelectable) ||
      (data.type === 'marker' && map.params.markersSelectable)
    ) {
      const ele = data.element

      // We're checking if regions/markers|SelectableOne option is presented
      if (map.params[`${data.type}sSelectableOne`]) {
        map.clearSelected(`${data.type}s`)
      }

      if (data.element.isSelected) {
        ele.select(false)
      } else {
        ele.select(true)
      }

      map.emit(data.event, [
        data.code,
        ele.isSelected,
        map.getSelected(`${data.type}s`)
      ])
    }
  })
}