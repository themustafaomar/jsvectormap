import SVGShapeElement from './ShapeElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGTextElement extends SVGShapeElement {

  constructor(config, style) {
    super('text', config, style)
  }

  applyAttr(attr, v) {
    attr === 'text' ? this.node.textContent = v : super.applyAttr(attr, v)
  }
}

export default SVGTextElement