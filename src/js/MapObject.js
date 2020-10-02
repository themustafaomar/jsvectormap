import Util from "./Util/Util";

/**
 * ------------------------------------------------------------------------
 * Class Definition ( Abstract )
 * ------------------------------------------------------------------------
 */
class MapObject {

  // Assert this class won't be instantiated
  /* constructor() {
    if (this.constructor === MapObject) {
      throw new TypeError('Abstract class "MapObject" cannot be instantiated directly.'); 
    }
  } */

  getLabelText(key) {
    const label = this.config.label

    if (label) {
      if (Util.isFunc(label.render)) {
        let params = [key]

        // Pass additional paramater (Marker object) in case the parent is a Marker.
        if (this.config.marker) {
          params.push(this.config.marker)
        }

        return label.render.apply(this, params)
      }

      return key
    }
  }

  getLabelOffsets(key) {
    const label = this.config.label

    if (label) {
      if (Util.isFunc(label.offsets)) {
        return label.offsets(key)
      }

      // If offsets are an array of offsets example: [ [0, 25], [10, 15] ]
      if (Util.isObject(label.offsets)) {
        return this.config.label.offsets[key]
      }
    }

    return [0, 0]
  }

  setStyle(property, value) {
    this.shape.setStyle(property, value)
  }

  remove() {
    this.shape.remove()
    if (this.label) this.label.remove()
  }

  hoverStatus(status) {
    this.shape.isHovered = status
    this.shape.updateStyle()
    this.isHovered = status

    if (this.label) {
      this.label.isHovered = status
      this.label.updateStyle()
    }
  }

  select() {
    this._selectStatus(true)
  }

  deselect() {
    this._selectStatus(false)
  }

  // Private
  
  _selectStatus(status) {
    this.shape.isSelected = status
    this.shape.updateStyle()
    this.isSelected = status

    if (this.label) {
      this.label.isSelected = status
      this.label.updateStyle()
    }
  }

}

export default MapObject