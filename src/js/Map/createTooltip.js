import Util from '../Util/Util'

export default function createTooltip() {

  const map = this, tooltip = Util.createEl('div', 'jsvmap-toolip')

  this.tooltip = Util.$(document.body.appendChild(tooltip))

  this.container.on('mousemove', event => {

    if (map.tooltip.selector.style.display === 'block') {

      let left = event.pageX - 10 - map.tooltip.width() + 'px',
          top = event.pageY - 10 - map.tooltip.height() + 'px'

      if (left < 5) {
        left = event.pageX + 15
      }
      if (left < 5) {
        top = event.pageY + 15
      }

      this.tooltip.css({
        left, top
      })
    }
  })
}