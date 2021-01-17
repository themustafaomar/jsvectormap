import Util from '../Util/Util'

export default function createTooltip() {
  const map = this, tooltip = Util.createElement('div', 'jvm-tooltip')

  this.tooltip = Util.$(document.body.appendChild(tooltip))

  this.container.on('mousemove', event => {
    if (map.tooltip.selector.style.display === 'block') {
      const container = this.container.selector.querySelector('#jvm-regions-group').getBoundingClientRect()
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
