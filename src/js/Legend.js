import Util from "./Util/Util"

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class Legend {
  constructor(params) {
    this.params = params || {}
    this.map = this.params.map
    this.series = this.params.series

    this.body = Util.createElement('div', 'jvm-legend')

    if (this.params.cssClass) {
      this.body.setAttribute('class', this.params.cssClass)
    }

    if (params.vertical) {
      this.map.legendVertical.appendChild(this.body)
    } else {
      this.map.legendHorizontal.appendChild(this.body)
    }

    this.render()
  }

  render() {
    let ticks = this.series.scale.getTicks(),
      inner = Util.createElement('div', 'jvm-legend-inner'),
      tick,
      sample,
      label

    this.body.innderHTML = ''

    if (this.params.title) {
      let legendTitle = Util.createElement('div', 'jvm-legend-title', this.params.title)
      this.body.appendChild(legendTitle)
    }

    this.body.appendChild(inner)

    for (let i = 0; i < ticks.length; i++) {
      tick = Util.createElement('div', 'jvm-legend-tick',)
      sample = Util.createElement('div', 'jvm-legend-tick-sample')

      switch (this.series.config.attribute) {
        case 'fill':
          if (Util.isImageUrl(ticks[i].value)) {
            sample.style.background = `url(${ticks[i].value})`
          } else {
            sample.style.background = ticks[i].value
          }
          break
        case 'stroke':
          sample.style.background = ticks[i].value
          break
        case 'image':
          sample.style.background = `url(${Util.isObject(ticks[i].value) ? ticks[i].value.url : ticks[i].value}) no-repeat center center`
          sample.style.backgroundSize = 'cover'
          break
      }

      tick.appendChild(sample)
      label = ticks[i].label

      if (this.params.labelRender) {
        label = this.params.labelRender(label)
      }

      const tickText = Util.createElement('div', 'jvm-legend-tick-text', label)

      tick.appendChild(tickText)
      inner.appendChild(tick)
    }
  }
}

export default Legend