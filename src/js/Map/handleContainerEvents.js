import Util from '../Util/Util'

export default function handleContainerEvents() {
  let mouseDown = false, oldPageX, oldPageY, map = this

  if (this.params.draggable) {
    this.container
      .on('mousemove', (e) => {
        if (mouseDown) {
          map.transX -= (oldPageX - e.pageX) / map.scale
          map.transY -= (oldPageY - e.pageY) / map.scale
          map.applyTransform()
          oldPageX = e.pageX
          oldPageY = e.pageY
        }
        return false
      }).on('mousedown', (e) => {
        mouseDown = true
        oldPageX = e.pageX
        oldPageY = e.pageY
        return false
      })

    Util.$('body').on('mouseup', () => {
      mouseDown = false
    })
  }

  if (this.params.zoomOnScroll) {
    this.container.on('wheel', event => {
      let deltaY = 0

      deltaY = ((event.deltaY || -event.wheelDelta || event.detail) >> 10) || 1
      deltaY = deltaY * 75

      const rect = this.container.selector.getBoundingClientRect(),
        offsetX = event.pageX - rect.left - window.pageXOffset,
        offsetY = event.pageY - rect.top - window.pageYOffset,
        zoomStep = Math.pow(1 + (map.params.zoomOnScrollSpeed / 1000), -1.5 * deltaY)

      if (map.tooltip) {
        map.tooltip.hide()
      }
      map.setScale(map.scale * zoomStep, offsetX, offsetY)
    }, {
      // https://www.chromestatus.com/feature/5745543795965952
      passive: true
    })
  }
}
