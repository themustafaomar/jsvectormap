import Util from '../Util/Util'

function parseEvent(map, selector, isTooltip) {
  var ele = Util.$(selector),
    elClassList = ele.attr('class'),
    type = elClassList.indexOf('jvm-region') === -1 ? 'marker' : 'region',
    code = type === 'region' ? ele.attr('data-code') : ele.attr('data-index'),
    event = `${type}:select`

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
  const map = this

  // When the mouse is over the region/marker | When the mouse is out the region/marker
  this.container.delegate('.jvm-element', 'mouseover mouseout', function (event) {
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
  this.container.delegate('.jvm-element', 'mouseup', function (event) {
    const data = parseEvent(map, this)

    if (
      data.type === 'region' && map.params.regionsSelectable ||
      data.type === 'marker' && map.params.markersSelectable &&
      !event.defaultPrevented
    ) {
      const ele = data.element

      // We're checking if regions/markers|SelectableOne option is presented
      // clear all selected regions/markers
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
