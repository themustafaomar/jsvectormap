import Series from '../series'

export default function createSeries() {
  this.series = { markers: [], regions: [] }

  for (let key in this.params.series) {
    for (let i = 0; i < this.params.series[key].length; i++) {
      this.series[key][i] = new Series(
        this.params.series[key][i], this[key], this
      )
    }
  }
}