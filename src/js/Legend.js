import Util from "./Util/Util";

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

    this.body = Util.createEl('div', 'jsvmap-legend')

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
    var ticks = this.series.scale.getTicks(),
      inner = Util.createEl('div', 'jsvmap-legend-inner'),
      tick,
      sample,
      label

    this.body.innderHTML = ''

    if (this.params.title) {
      let legendTitle = Util.createEl('div', 'jsvmap-legend-title', this.params.title)
      this.body.appendChild(legendTitle)
    }

    this.body.appendChild(inner)

    for (let i = 0; i < ticks.length; i++) {

      tick = Util.createEl('div', 'jsvmap-legend-tick',)
      sample = Util.createEl('div', 'jsvmap-legend-tick-sample')

      switch (this.series.legendConfig.attribute) {
        case 'fill':
          if (Util.isImageUrl(ticks[i].value)) {
            sample.style.background = 'url(' + ticks[i].value + ')'
          } else {
            sample.style.background = ticks[i].value
          }
          break
        case 'stroke':
          sample.style.background = ticks[i].value
          break
        case 'image':
          sample.style.background = 'url(' + (
            Util.isObject(ticks[i].value) ? ticks[i].value.url : ticks[i].value
          ) + ') no-repeat center center'
          sample.style.backgroundSize = 'cover'
          break
      }

      tick.appendChild(sample)
      label = ticks[i].label

      if (this.params.labelRender) {
        label = this.params.labelRender(label)
      }

      const tickText = Util.createEl('div', 'jsvmap-legend-tick-text', label)

      tick.appendChild(tickText)
      inner.appendChild(tick)

    }
  }
}


export default Legend