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
    super('svg') // Create svg element for holding the whole map

    this._container = container

    // Create the defs element
    this._defsElement = new SVGElement('defs')

    // Create group element which will hold the paths (regions)
    this._rootElement = new SVGElement('g', { id: 'jvm-regions-group' })

    // Append the defs element to the this.node (SVG tag)
    this.node.appendChild(this._defsElement.node)

    // Append the group to this.node (SVG tag)
    this.node.appendChild(this._rootElement.node)

    // Append this.node (SVG tag) to the container
    this._container.append(this.node)
  }

  setSize(width, height) {
    this.node.setAttribute('width', width)
    this.node.setAttribute('height', height)
  }

  applyTransformParams(scale, transX, transY) {
    this._rootElement.node.setAttribute('transform', `scale(${scale}) translate(${transX}, ${transY})`)
  }

  // Create `path` element
  createPath(config, style) {
    const el = new SVGShapeElement('path', config, style)

    el.node.setAttribute('fill-rule', 'evenodd')

    return this.add(el)
  }

  // Create `circle` element
  createCircle(config, style, group) {
    const el = new SVGShapeElement('circle', config, style)

    return this.add(el, group)
  }

  // Create `line` element
  createLine(config, style, group) {
    const el = new SVGShapeElement('line', config, style)

    return this.add(el, group)
  }

  // Create `text` element
  createText(config, style, group) {
    const el = new SVGTextElement(config, style) // extends SVGShapeElement

    return this.add(el, group)
  }

  // Create `image` element
  createImage(config, style, group) {
    const el = new SVGImageElement(config, style) // extends SVGShapeElement

    return this.add(el, group)
  }

  // Create `g` element
  createGroup(id) {
    const el = new SVGElement('g')

    this.node.appendChild(el.node)

    if (id) {
      el.node.id = id
    }

    el.canvas = this

    return el
  }

  // Add some element to a spcific group or the root element if the group isn't given
  add(element, group) {
    group = group || this._rootElement

    group.node.appendChild(element.node)

    // element.canvas = this

    return element
  }
}

export default SVGCanvasElement