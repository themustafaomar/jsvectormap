export default function repositionMarkers() {
  let point

  for (let index in this.markers) {
    point = this.getMarkerPosition(this.markers[index].config)

    if (point !== false) {
      this.markers[index].element.setStyle({
        cx: point.x, cy: point.y
      })
    }
  }
}
