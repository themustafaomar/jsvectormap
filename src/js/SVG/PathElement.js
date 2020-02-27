import SVGShapeElement from './ShapeElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGPathElement extends SVGShapeElement {

  constructor(config, style) {
    super('path', config, style)
    this.node.setAttribute('fill-rule', 'evenodd')
  }

}

export default SVGPathElement