
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class OrdinalScale {
  constructor(scale) {
    this.scale = scale
  }

  getValue(value){
    return this.scale[value]
  }

  getTicks() {
    var ticks = []
  
    for (let key in this.scale) {
      ticks.push({
        label: key,
        value: this.scale[key]
      })
    }

    return ticks
  }

}

export default OrdinalScale