import SerieMaker from '../SerieMaker'

export default function createSeries() {
  var i, key

  this.series = {
    markers: [],
    regions: []
  }

  for (key in this.params.series) {
    for (i = 0; i < this.params.series[key].length; i++) {
      this.series[key][i] = new SerieMaker(this.params.series[key][i], this[key], this)
    }
  }
}