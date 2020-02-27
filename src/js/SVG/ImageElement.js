import Util from '../Util/Util'
import SVGShapeElement from './ShapeElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGImageElement extends SVGShapeElement {
 
  constructor(config, style) {
    super('image', config, style) 
  }

  applyAttr(attr, value) {
    let imageUrl

    if (attr == 'image') {

      if (Util.isObject(value)) {
        imageUrl = value.url
        this.offset = value.offset
      } else {
        imageUrl = value
        this.offset = [0, 0]
      }

      this.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl)
      this.width = 23
      this.height = 23
      this.applyAttr('width', this.width)
      this.applyAttr('height', this.height)
      this.applyAttr('x', this.cx - this.width / 2 + this.offset[0])
      this.applyAttr('y', this.cy - this.height / 2 + this.offset[1])

    } else if (attr == 'cx') {
      this.cx = value
      if (this.width) {
        this.applyAttr('x', value - this.width / 2 + this.offset[0])
      }
    } else if (attr == 'cy') {
      this.cy = value
      if (this.height) {
        this.applyAttr('y', value - this.height / 2 + this.offset[1])
      }
    } else {
      super.applyAttr.apply(this, arguments)
    }
  }

  setStyle() {
    super.setStyle.apply(this, arguments)
  }
}

export default SVGImageElement