import Util from "../Util/Util"

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGElement {
  constructor(name, config) {

    this.name = name
    this.properties = {}
    this.node = this.createElement(name)

    if (config) this.set(config)

  }

  createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName)
  }

  addClass(className) {
    this.node.setAttribute('class', className)
  }

  getElementCtr(ctr) {
    return SVG + ctr
  }

  getBBox() {
    return this.node.getBBox()
  }

  set(property, value) {
    if (typeof property === 'object') {
      for (var key in property) {
        this.properties[key] = property[key]
        this.applyAttr(key, property[key])
      }
    } else {
      this.properties[property] = value
      this.applyAttr(property, value)
    }
  }

  get(property) {
    return this.properties[property]
  }

  applyAttr(property, value) {
    this.node.setAttribute(Util.hyphenate(property), value);
  }

  remove() {
    this.node.parentNode.removeChild(this.node)
  }

}

export default SVGElement