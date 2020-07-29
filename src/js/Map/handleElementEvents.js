import Util from '../Util/Util'

function parseEvent(map, selector, isTooltip) {
  var el = Util.$(selector),
    elClassList = el.attr('class'),
    type = elClassList.indexOf('jsvmap-region') === -1 ? 'marker' : 'region',
    code = type === 'region' ? el.attr('data-code') : el.attr('data-index'),
    event = type + ':select'

  // Init tooltip event
  if (isTooltip) {
    event = type + '.tooltip:show'
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

  // When the mouse is over the region/marker
  // When the mouse is out the region/marker
  this.container.delegate('.jsvmap-element', 'mouseover mouseout', function (event) {

    const data = parseEvent(map, this, true),
      showTooltip = map.params.showTooltip

    if (event.type === 'mouseover') {
      const defaultPrevented = event.defaultPrevented

      if (!defaultPrevented) {
        data.element.hoverStatus(true)
      }

      if (showTooltip && !defaultPrevented) {
        map.tooltip.text(data.tooltipText)
        map.tooltip.show()
        map.tooltipHeight = map.tooltip.height()
        map.tooltipWidth = map.tooltip.width()

        map.emit(data.event, [
          map.tooltip,
          data.code,
        ])
      }

    } else {
      data.element.hoverStatus(false)

      if (showTooltip) {
        map.tooltip.hide()
      }
    }
  })

  // When the click is released
  this.container.delegate('.jsvmap-element', 'mouseup', function (event) {

    const data = parseEvent(map, this)

    if (
      (data.type === 'region' && map.params.regionsSelectable) ||
      (data.type === 'marker' && map.params.markersSelectable)
    ) {
      if (!event.defaultPrevented) {
        const el = data.element

        // If regions/markers:SelectableOne option is passed, remove all selected regions/markers
        if (map.params[data.type + 'sSelectableOne']) {
          // Clear all selected regions/markers
          map.clearSelected(data.type + 's')
        }

        data.element.isSelected ? el.deselect() : el.select()

        map.emit(
          data.event, [
            data.code,
            data.element.isSelected,
            map.getSelected(data.type + 's')
          ]
        )
      }
    }
  })
}