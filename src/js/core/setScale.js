import Events from '../defaults/events'

export default function setScale(scale, anchorX, anchorY, isCentered, animate) {
  let zoomStep,
    interval,
    i = 0,
    count = Math.abs(Math.round((scale - this.scale) * 60 / Math.max(scale, this.scale))),
    scaleStart,
    scaleDiff,
    transXStart,
    transXDiff,
    transYStart,
    transYDiff,
    transX,
    transY

  if (scale > this.params.zoomMax * this.baseScale) {
    scale = this.params.zoomMax * this.baseScale
  } else if (scale < this.params.zoomMin * this.baseScale) {
    scale = this.params.zoomMin * this.baseScale
  }

  if (typeof anchorX != 'undefined' && typeof anchorY != 'undefined') {
    zoomStep = scale / this.scale
    if (isCentered) {
      transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2
      transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2
    } else {
      transX = this.transX - (zoomStep - 1) / scale * anchorX
      transY = this.transY - (zoomStep - 1) / scale * anchorY
    }
  }

  if (animate && count > 0) {
    scaleStart = this.scale
    scaleDiff = (scale - scaleStart) / count
    transXStart = this.transX * this.scale
    transYStart = this.transY * this.scale
    transXDiff = (transX * scale - transXStart) / count
    transYDiff = (transY * scale - transYStart) / count
    interval = setInterval(() => {
      i += 1
      this.scale = scaleStart + scaleDiff * i
      this.transX = (transXStart + transXDiff * i) / this.scale
      this.transY = (transYStart + transYDiff * i) / this.scale
      this._applyTransform()
      if (i == count) {
        clearInterval(interval)

        this._emit(Events.onViewportChange, [
          this.scale, this.transX, this.transY
        ])
      }
    }, 10)
  } else {
    this.transX = transX
    this.transY = transY
    this.scale = scale

    this._applyTransform()
    this._emit(Events.onViewportChange, [
      this.scale, this.transX, this.transY
    ])
  }
}