import MapElement from './MapElement'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Marker extends MapElement {
  constructor({ index, style, label, cx, cy, map, group }) {
    super()

    // Private
    this._map = map
    this._isImage = !!style.initial.image

    // Protected
    this.config = arguments[0]
    this.shape = map.canvas[this._isImage ? 'createImage' : 'createCircle']({ dataIndex: index, cx, cy }, this._getStyle(), group)

    this.shape.addClass('jvm-marker jvm-element')

    if (this._isImage) {
      this.updateLabelPosition()
    }

    if (label) {
      this._createLabel(this.config)
    }
  }

  updateLabelPosition() {
    if (this.label) {
      this.label.set({
        x: this._labelX * this._map.scale + this._offsets[0] +
           this._map.transX * this._map.scale + 5 + (
            this._isImage ? (this.shape.width || 0) / 2 : this.shape.node.r.baseVal.value
          ),
        y: this._labelY * this._map.scale + this._map.transY * this._map.scale + this._offsets[1]
      })
    }
  }

  _createLabel({ index, map, label, labelsGroup, cx, cy, marker, isRecentlyCreated }) {
    let labelText = this.getLabelText(index, label)

    this._labelX = cx / map.scale - map.transX
    this._labelY = cy / map.scale - map.transY
    this._offsets = isRecentlyCreated && marker.offsets ? marker.offsets : this.getLabelOffsets(index, label)

    this.label = map.canvas.createText({
      text: labelText,
      dataIndex: index,
      x: this._labelX,
      y: this._labelY,
      dy: "0.6ex",
    }, map.params.markerLabelStyle, labelsGroup)

    this.label.addClass('jvm-marker jvm-element')

    if (isRecentlyCreated) {
      this.updateLabelPosition()
    }
  }

  _getStyle() {
    let style = {}

    if (this._isImage) {
      style.initial = { image: this.config.style.initial.image }
    } else {
      style = this.config.style
    }

    return style
  }
}

export default Marker