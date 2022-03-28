import baseElement from './baseElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Region extends baseElement {
  constructor({ map, code, path, style, label, labelStyle, labelsGroup }) {
    super()

    this.canvas = map.canvas
    this.map = map

    this.shape = this.canvas.createPath({ d: path, dataCode: code }, style)
    this.shape.addClass('jvm-region jvm-element')

    let bbox = this.shape.getBBox(),
      text = this.getLabelText(code, label)

    // If label is passed and render function returns something 
    if (label && text) {
      let offsets = this.getLabelOffsets(code)
      this.labelX = bbox.x + bbox.width / 2 + offsets[0]
      this.labelY = bbox.y + bbox.height / 2 + offsets[1]

      this.label = this.canvas.createText({
        text,
        textAnchor: 'middle',
        alignmentBaseline: 'central',
        dataCode: code,
        x: this.labelX,
        y: this.labelY,
      }, labelStyle, labelsGroup)

      this.label.addClass('jvm-region jvm-element')
    }
  }

  updateLabelPosition() {
    if (this.label) {
      this.label.set({
        x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale
      })
    }
  }
}

export default Region