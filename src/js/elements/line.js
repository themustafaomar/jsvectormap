import baseElement from './baseElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Line extends baseElement {
  constructor({ index, map, style, x1, y1, x2, y2, group }) {
    super()

    this.shape = map.canvas.createLine({ x1, y1, x2, y2, dataIndex: index }, style, group)

    this.shape.addClass('jvm-line')
  }
}

export default Line