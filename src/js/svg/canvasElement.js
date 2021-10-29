import SVGElement from './baseElement'
import SVGShapeElement from './shapeElement'
import SVGTextElement from './textElement'
import SVGImageElement from './imageElement'

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
    this._container.appendChild(this.node)
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
    const path = new SVGShapeElement('path', config, style)

    path.node.setAttribute('fill-rule', 'evenodd')

    return this.add(path)
  }

  // Create `circle` element
  createCircle(config, style, group) {
    const circle = new SVGShapeElement('circle', config, style)

    return this.add(circle, group)
  }

  // Create `line` element
  createLine(config, style, group) {
    const line = new SVGShapeElement('line', config, style)

    return this.add(line, group)
  }

  // Create `text` element
  createText(config, style, group) {
    const text = new SVGTextElement(config, style) // extends SVGShapeElement

    return this.add(text, group)
  }

  // Create `image` element
  createImage(config, style, group) {
    const image = new SVGImageElement(config, style) // extends SVGShapeElement

    return this.add(image, group)
  }

  // Create `g` element
  createGroup(id) {
    const group = new SVGElement('g')

    this.node.appendChild(group.node)

    if (id) {
      group.node.id = id
    }

    group.canvas = this

    return group
  }

  // Add some element to a spcific group or the root element if the group isn't given
  add(element, group) {
    group = group || this._rootElement

    group.node.appendChild(element.node)

    return element
  }
}

export default SVGCanvasElement