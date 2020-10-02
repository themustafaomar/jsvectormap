import MapObject from './MapObject'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Marker extends MapObject {
  constructor({ index, style, label, labelsGroup, cx, cy, map, isRecentlyCreated }) {

    super()

    var labelText

    this.map = map
    this.config = arguments[0]
    this.isImage = !!style.initial.image

    this.createShape()

    if (isRecentlyCreated && label.render && isRecentlyCreated.label) {
      labelText = isRecentlyCreated.label
    } else {
      labelText = super.getLabelText(index)
    }

    if (label && labelText) {
      this.offsets = (isRecentlyCreated && label.render && isRecentlyCreated.offset) ? isRecentlyCreated.offset
        : super.getLabelOffsets(index)

      this.labelX = cx / map.scale - map.transX
      this.labelY = cy / map.scale - map.transY

      this.label = map.canvas.createText({
        text: labelText,
        'data-index': index,
        dy: "0.6ex",
        x: this.labelX,
        y: this.labelY
      }, map.params.markerLabelStyle, labelsGroup)

      this.label.addClass('jsvmap-marker jsvmap-element')

      if (isRecentlyCreated) {
        this.updateLabelPosition()
      }
    }
  }

  createShape() {
    if (this.shape) {
      this.shape.remove()
    }

    this.shape = this.config.map.canvas[this.isImage ? 'createImage' : 'createCircle']({
      "data-index": this.config.index,
      cx: this.config.cx,
      cy: this.config.cy
    }, this.config.style, this.config.group)

    this.shape.addClass('jsvmap-marker jsvmap-element')

    // If the marker is an image..
    if (this.isImage) {
      this.updateLabelPosition()
    }
  }

  updateLabelPosition() {
    if (this.label) {
      this.label.set({
        x: this.labelX * this.map.scale + this.offsets[0] +
           this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
      })
    }
  }

  // This will be called only when making serie marker
  setStyle(property, value) {

    super.setStyle(property, value)

    // this will be called only if there is a serie marker with r attribute
    if (property === 'r') {
      this.updateLabelPosition()
    }

    var isImage = !!this.shape.get('image')

    if (isImage != this.isImage) {
      // this.isImage = isImage
      this.config.style = Object.assign({}, this.shape.style)
      // this.config.style = Object.assign({}, this.shape.style)
      this.createShape()
    }
  }
}

export default Marker