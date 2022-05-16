import BaseComponent from './base'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Line extends BaseComponent {
  constructor({ index, map, style, x1, y1, x2, y2, group }) {
    super()

    this.shape = map.canvas.createLine({ x1, y1, x2, y2, dataIndex: index }, style, group)
    this.shape.addClass('jvm-line')
  }

  setStyle(property, value) {
    this.shape.setStyle(property, value)
  }

  // remove() {
  //   this.shape.remove()
  // }
}

export default Line