import EventHandler from '../eventHandler'
import { getElement } from '../util/index'

export default function handleContainerEvents() {
  let mouseDown = false, oldPageX, oldPageY, map = this

  if (this.params.draggable) {
    EventHandler.on(this.container, 'mousemove', (e) => {
      if (!mouseDown) {
        return false
      }

      map.transX -= (oldPageX - e.pageX) / map.scale
      map.transY -= (oldPageY - e.pageY) / map.scale
      map.applyTransform()
      oldPageX = e.pageX
      oldPageY = e.pageY
      this.isBeingDragged = true
    })

    EventHandler.on(this.container, 'mousedown', (e) => {
      mouseDown = true
      oldPageX = e.pageX
      oldPageY = e.pageY
      return false
    })

    EventHandler.on(getElement('body'), 'mouseup', () => {
      mouseDown = false
    })
  }

  if (this.params.zoomOnScroll) {
    EventHandler.on(this.container, 'wheel', event => {
      let deltaY = 0

      deltaY = ((event.deltaY || -event.wheelDelta || event.detail) >> 10) || 1
      deltaY = deltaY * 75

      const rect = this.container.getBoundingClientRect(),
        offsetX = event.pageX - rect.left - window.pageXOffset,
        offsetY = event.pageY - rect.top - window.pageYOffset,
        zoomStep = Math.pow(1 + (map.params.zoomOnScrollSpeed / 1000), -1.5 * deltaY)

      if (map.tooltip) {
        map.tooltip.hide()
      }
      map.setScale(map.scale * zoomStep, offsetX, offsetY)
      
      event.preventDefault()
    })
  }
}
