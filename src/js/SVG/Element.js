import Util from "../Util/Util"

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGElement {
  constructor(name, config) {
    this._name = name
    this.node = this.createElement(name)
    
    if (config) {
      this.set(config)
    }
  }

  // Create new SVG element `svg`, `g`, `path`, `line`, `circle`, `image`, etc.
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS#important_namespace_uris
  createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName)
  }

  addClass(className) {
    this.node.setAttribute('class', className)
  }

  getBBox() {
    return this.node.getBBox()
  }

  // Apply attributes on the current node element
  set(property, value) {
    if (Util.isObj(property)) {
      for (let attr in property) {
        this.applyAttr(attr, property[attr])
      }
    } else {
      this.applyAttr(property, value)
    }
  }

  get(property) {
    return this.style.initial[property]
  }

  applyAttr(property, value) {
    this.node.setAttribute(Util.hyphenate(property), value)
  }

  remove() {
    this.node.parentNode.removeChild(this.node)
  }
}

export default SVGElement