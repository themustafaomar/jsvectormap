import Util from '../Util/Util'
import SVGElement from './Element'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGShapeElement extends SVGElement {
  constructor(name, config, style = {}) {
    super(name, config)

    this.isHovered = false
    this.isSelected = false
    this.style = style
    this.style.current = {}

    this.updateStyle()
  }

  setStyle(property, value) {
    if (Util.isObj(property)) {
      Util.merge(this.style.current, property)
    } else {
      Util.merge(this.style.current, { [property]: value })
    }

    this.updateStyle()
  }

  updateStyle() {
    const attrs = {}

    Util.merge(attrs, this.style.initial)

    Util.merge(attrs, this.style.current)

    if (this.isHovered) {
      Util.merge(attrs, this.style.hover)
    }

    if (this.isSelected) {
      Util.merge(attrs, this.style.selected)

      if (this.isHovered) {
        Util.merge(attrs, this.style.selectedHover)
      }
    }

    this.set(attrs)
  }
}

export default SVGShapeElement
