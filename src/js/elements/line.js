/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Line {
  constructor({ index, map, style, x1, y1, x2, y2, group }) {
    this.shape = map.canvas.createLine({ x1, y1, x2, y2, dataIndex: index }, style, group)

    this.shape.addClass('jvm-line')
  }

  setStyle(property, value) {
    this.shape.setStyle(property, value)
  }
}

export default Line