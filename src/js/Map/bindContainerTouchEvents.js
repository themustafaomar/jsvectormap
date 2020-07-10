export default function bindContainerTouchEvents() {
  let map = this,
      touchStartScale,
      touchStartDistance,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength

  let handleTouchEvent = (e) => {
    var touches = e.touches,
        scale,
        transXOld,
        transYOld

    if (e.type == 'touchstart') {
      lastTouchesLength = 0
    }

    if (touches.length == 1) {
      if (lastTouchesLength == 1) {
        transXOld = map.transX
        transYOld = map.transY
        map.transX -= (touchX - touches[0].pageX) / map.scale
        map.transY -= (touchY - touches[0].pageY) / map.scale

        map.tooltip.hide()
        map.applyTransform()

        if (transXOld != map.transX || transYOld != map.transY) {
          e.preventDefault()
        }
      }

      touchX = touches[0].pageX
      touchY = touches[0].pageY
    } else if (touches.length == 2) {

      if (lastTouchesLength == 2) {
        scale = Math.sqrt(
          Math.pow(touches[0].pageX - touches[1].pageX, 2) +
          Math.pow(touches[0].pageY - touches[1].pageY, 2)
        ) / touchStartDistance

        map.setScale(touchStartScale * scale, centerTouchX, centerTouchY)

        map.tooltip.hide()
        e.preventDefault()
      }
    }

    lastTouchesLength = touches.length
  }

  this.container.on('touchstart', handleTouchEvent).on('touchmove', handleTouchEvent)
}