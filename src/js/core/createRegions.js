import { merge } from '../util/index'
import Region from '../elements/region'

export default function createRegions() {
  let code, region

  this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.createGroup('jvm-regions-labels-group')

  for (code in this.mapData.paths) {
    region = new Region({
      map: this,
      code: code,
      path: this.mapData.paths[code].path,
      style: merge({}, this.params.regionStyle),
      labelStyle: this.params.regionLabelStyle, 
      labelsGroup: this.regionLabelsGroup,
      label: this.params.labels && this.params.labels.regions,
    })

    this.regions[code] = {
      config: this.mapData.paths[code],
      element: region
    }
  }
}