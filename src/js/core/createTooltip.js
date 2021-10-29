import {
  $,
  createElement,
  findElement
} from '../util/index'
import EventHandler from '../eventHandler'

export default function createTooltip() {
  const tooltip = createElement('div', 'jvm-tooltip')

  this.tooltip = $(document.body.appendChild(tooltip))

  EventHandler.on(this.container, 'mousemove', event => {
    if (this.tooltip.selector.style.display === 'block') {
      const container = findElement(this.container, '#jvm-regions-group').getBoundingClientRect()
      const space = 5 // Space between the cursor and tooltip element

      // Tooltip
      const { height, width } = tooltip.getBoundingClientRect()
      const topIsPassed = event.clientY <= (container.top + height + space)
      let top = event.pageY - height - space
      let left = event.pageX - width - space

      // Ensure the tooltip will never cross outside the canvas area(map)
      if (topIsPassed) { // Top:
        top += height + space

        // The cursor is a bit larger from left side
        left -= space * 2
      }

      if (event.clientX < (container.left + width + space)) { // Left:
        left = event.pageX + space + 2

        if (topIsPassed) {
          left += space * 2
        }
      }

      this.tooltip.css({
        top: `${top}px`,
        left: `${left}px`,
      })
    }
  })
}
