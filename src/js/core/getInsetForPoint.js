import Map from '../map'

export default function getInsetForPoint(x, y) {
  const insets = Map.maps[this.params.map].insets

  for (const index = 0; index < insets.length; index++) {
    const [start, end] = insets[index].bbox

    if (x > start.x && x < end.x && y > start.y && y < end.y) {
      return insets[index]
    }
  }
}