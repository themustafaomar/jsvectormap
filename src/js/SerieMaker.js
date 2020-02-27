import Util from './Util/Util'
import Legend from './Legend'
import OrdinalScale from './Scales/OrdinalScale'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class DataSeries {
  constructor(legendConfig = {}, elements, map) {

    this.map = map
    this.elements = elements // Markers or regions
    this.legendConfig = legendConfig
    this.legendConfig.attribute = legendConfig.attribute || 'fill'
    this.values = legendConfig.values || {}

    if (legendConfig.attributes) {
      this.setAttributes(legendConfig.attributes)
    }

    if (Util.isObject(legendConfig.scale)) {
      this.scale = new OrdinalScale(legendConfig.scale)
    }
    /* else {
      // @todo I may support this scale in the future (Array.isArray(legendConfig.scale))
      throw new Error("Scale of type array doesn't supported yet.")
    }  */

    this.parseValues(this.values)

    if (this.legendConfig.legend) {
      this.legend = new Legend(
        Object.assign({ map: this.map, series: this }, this.legendConfig.legend)
      )
    }
  }

  parseValues(values) {
    var attrs = {}

    for (let key in values) {
      if (values[key]) {
        attrs[key] = this.scale.getValue(values[key]);
      }
    }

    this.setAttributes(attrs)
    Object.assign(this.values, values)
  }

  setAttributes(attrs) {
    for (let key in attrs) {
      if (this.elements[key]) {
        this.elements[key].element.setStyle(
          this.legendConfig.attribute, attrs[key]
        )
      }
    }
  }

  
  clear() {
    let key, attrs = {}

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] = this.elements[key].element.shape.style.initial[this.legendConfig.attribute]
      }
    }

    this.setAttributes(attrs)
    this.values = {}
  }

}

export default DataSeries