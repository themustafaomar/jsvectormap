import Map from '../map'
import Proj from '../projection'

export default function coordsToPoint(lat, lng) {
  let point,
    proj = Map.maps[this.params.map].projection,
    centralMeridian = proj.centralMeridian,
    inset,
    bbox

  point = Proj[proj.type](lat, lng, centralMeridian)
  inset = this.getInsetForPoint(point.x, point.y)

  if (inset) {
    bbox = inset.bbox

    point.x = (point.x - bbox[0].x) / (bbox[1].x - bbox[0].x) * inset.width * this.scale
    point.y = (point.y - bbox[0].y) / (bbox[1].y - bbox[0].y) * inset.height * this.scale

    return {
      x: point.x + this.transX * this.scale + inset.left * this.scale,
      y: point.y + this.transY * this.scale + inset.top * this.scale
    }
  }

  return false
}