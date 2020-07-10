import Util from '../Util/Util'

export default function handleContainerEvents() {
  var mouseDown = false, oldPageX, oldPageY, map = this

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
    this.container.on('wheel', (event) => {
      var deltaY = 0

			event.preventDefault()

      deltaY = ((event.deltaY || -event.wheelDelta || event.detail) >> 10) || 1
      deltaY = deltaY * 75

      var rect = this.container.selector.getBoundingClientRect(),
        offsetX = event.pageX - rect.left - window.pageXOffset,
        offsetY = event.pageY - rect.top - window.pageYOffset,
        zoomStep = Math.pow(1 + (map.params.zoomOnScrollSpeed / 1000), -1.5 * deltaY)

      map.tooltip.hide()
      map.setScale(map.scale * zoomStep, offsetX, offsetY)
      event.preventDefault()
    })
  }
}