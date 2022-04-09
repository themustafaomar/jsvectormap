import Map from '../map'

export default function getInsetForPoint(x, y) {
  let index, bbox, insets = Map.maps[this.params.map].insets

  for (index = 0; index < insets.length; index++) {
    bbox = insets[index].bbox

    if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
      return insets[index]
    }
  }
}