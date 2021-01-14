import Region from '../Region'
import Util from '../Util/Util'

export default function createRegions() {
  let code, region

  this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.createGroup('regions-labels-group')

  for (code in this.mapData.paths) {
    region = new Region({
      map: this,
      code: code,
      path: this.mapData.paths[code].path,
      style: Util.merge({}, this.params.regionStyle),
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
