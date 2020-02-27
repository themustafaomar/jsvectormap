import MapObject from './MapObject'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Region extends MapObject {
  constructor({ map, code, path, style, label, labelStyle, labelsGroup }) {

    super()

    this.config = arguments[0]
    this.canvas = map.canvas
    this.map = map

    this.shape = this.canvas.createPath({ 'data-code': code, d: path }, style, this.canvas.rootElement)
    this.shape.addClass('jsvmap-region jsvmap-element')

    let bbox = this.shape.getBBox(),
      text = this.getLabelText(code)

    // If label is passed and render function returns something 
    if (label && text) {
      let offsets = this.getLabelOffsets(code)
      this.labelX = bbox.x + bbox.width / 2 + offsets[0]
      this.labelY = bbox.y + bbox.height / 2 + offsets[1]

      // SVGTextElement class:: name, properties, node, style, isHovered, isSelected, canvas
      this.label = this.canvas.createText({
        text,
        "text-anchor": 'middle',
        "alignment-baseline": 'central',
        "data-code": code,
        x: this.labelX,
        y: this.labelY,
      }, labelStyle, labelsGroup)

      this.label.addClass('jsvmap-region jsvmap-element')
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