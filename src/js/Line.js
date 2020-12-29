import MapObject from './MapObject'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Line extends MapObject {
  constructor({ index, map, style, x1, y1, x2, y2, group }) {

    super()

    // Actually, I don't remember why we're doing this, tested it many times it has no effect
    // Currently it's commented until something goes wrong.
    // if (this.shape) {
    //   this.shape.remove()
    // }

    this.shape = map.canvas.createLine({ x1, y1, x2, y2, 'data-index': index, stroke: "black" }, style, group)

    this.shape.addClass('jsvmap-line')
  }
}

export default Line
