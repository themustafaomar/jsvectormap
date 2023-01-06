export default function repositionMarkers() {
  let point

  for (let index in this._markers) {
    point = this.getMarkerPosition(this._markers[index].config)

    if (point !== false) {
      this._markers[index].element.setStyle({
        cx: point.x, cy: point.y
      })
    }
  }
}