import SVGElement from './Element'
import SVGShapeElement from './ShapeElement'
import SVGTextElement from './TextElement'
import SVGImageElement from './ImageElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class SVGCanvasElement extends SVGElement {
  constructor(container) {

    // Create svg element for holding the whole map
    super('svg')

    this.container = container

    // Create the defs element
    this.defsElement = new SVGElement('defs')

    // Append the defs element to the this.node (SVG tag)
    this.node.appendChild(this.defsElement.node)

    // Create group element which will hold the paths (regions)
    this.rootElement = new SVGElement('g')

    // Append the group to this.node (SVG tag)
    this.node.appendChild(this.rootElement.node)

    // Append this.node (SVG tag) to the container
    this.container.append(this.node)
  }

  setSize(width, height) {
    this.node.setAttribute('width', width)
    this.node.setAttribute('height', height)
  }

  applyTransformParams(scale, transX, transY) {
    this.rootElement.node.setAttribute('transform', `scale(${scale}) translate(${transX}, ${transY})`)
  }

  createPath(config, style, group) {
    const el = new SVGShapeElement('path', config, style)

    el.node.setAttribute('fill-rule', 'evenodd')

    this.add(el, group)
    return el
  }

  createCircle(config, style, group) {
    const el = new SVGShapeElement('circle', config, style)

    this.add(el, group)
    return el
  }

  createLine(config, style, group) {
    const el = new SVGShapeElement('line', config, style) // extends SVGShapeElement

    this.add(el, group)
    return el
  }

  createImage(config, style, group) {
    const el = new SVGImageElement(config, style) // extends SVGShapeElement

    this.add(el, group)
    return el
  }

  createText(config, style, group) {
    const el = new SVGTextElement(config, style) // extends SVGShapeElement
  
    this.add(el, group)
    return el
  }

  createGroup(parentGroup, id) {
    const el = new SVGElement('g')

    if (id) {
      el.node.id = id
    }

    if (parentGroup) {
      parentGroup.node.appendChild(el.node)
    } else {
      this.node.appendChild(el.node)
    }

    el.canvas = this

    return el
  }

  // Add some element to a spcific group or the root element if the group isn't given
  add(element, group) {
    group = group || this.rootElement

    group.node.appendChild(element.node)

    element.canvas = this
  }

}

export default SVGCanvasElement
