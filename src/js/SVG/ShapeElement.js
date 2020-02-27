import Util from '../Util/Util'
import SVGElement from './Element'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGShapeElement extends SVGElement {
  constructor(name, config, style) {

    super(name, config)

    this.style = style || {}
    this.style.current = this.style.current || {}
    this.isHovered = false
    this.isSelected = false
    this.updateStyle()
  }

  setStyle(property, value) {
    let styles = {}

    if (Util.isObject(property)) {
      styles = property
    } else {
      styles[property] = value
    }

    Object.assign(this.style.current, styles)

    this.updateStyle()
  }
 
  updateStyle() {
    const attrs = {}

    this.mergeStyles(attrs, this.style.initial)
    this.mergeStyles(attrs, this.style.current)

    if (this.isHovered) {
      this.mergeStyles(attrs, this.style.hover)
    }

    if (this.isSelected) {
      this.mergeStyles(attrs, this.style.selected)
      if (this.isHovered) {
        this.mergeStyles(attrs, this.style.selectedHover)
      }
    }

    this.set(attrs)
  }

  mergeStyles(styles, newStyles) {
    newStyles = newStyles || {}

    for (let key in newStyles) {
      if (newStyles[key] === null) {
        delete styles[key]
      } else {
        styles[key] = newStyles[key]
      }
    }
  }

}

export default SVGShapeElement