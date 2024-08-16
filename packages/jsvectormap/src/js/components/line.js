import BaseComponent from './base'

const LINE_CLASS = 'jvm-line'

class Line extends BaseComponent {
  constructor(options, style) {
    super()
    this._options = options
    this._style = style
    this._draw()
  }

  setStyle(property, value) {
    this.shape.setStyle(property, value)
  }

  getConfig() {
    return this._options.config
  }

  _draw() {
    const { index, group, map, animate } = this._options
    const config = {
      d: this._getDAttribute(),
      fill: 'none',
      dataIndex: index,
    }

    this.shape = map.canvas.createPath(config, this._style, group)
    this.shape.addClass(LINE_CLASS)

    if (animate) {
      this.shape.setStyle({ animation: true })
    }
  }

  _getDAttribute() {
    const { x1, y1, x2, y2 } = this._options
    return `M${x1},${y1}${this._getQCommand(x1, y1, x2, y2)}${x2},${y2}`
  }

  _getQCommand(x1, y1, x2, y2) {
    if (!this._options.curvature) {
      return ' '
    }

    const curvature = this._options.curvature || 0.6
    const curveX = (x1 + x2) / 2 + curvature * (y2 - y1)
    const curveY = (y1 + y2) / 2 - curvature * (x2 - x1)

    return ` Q${curveX},${curveY} `
  }
}

export default Line