import MapObject from './MapObject'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Line extends MapObject {
  constructor({ index, style, label, labelsGroup, x1, y1, x2, y2, map, isRecentlyCreated }) {

    super()

    var labelText

    this.map = map
    this.config = arguments[0]

    this.createShape()
  }

  createShape() {
    if (this.shape) {
      this.shape.remove()
    }

    this.shape = this.config.map.canvas.createLine({
      x1: this.config.x1,
      y1: this.config.y1,
      x2: this.config.x2,
      y2: this.config.y2,
      stroke: "black"
    }, this.config.style, this.config.group)

    this.shape.addClass('jsvmap-line jsvmap-element')
  }
}

export default Line
