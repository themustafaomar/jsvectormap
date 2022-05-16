export default function repositionLines() {
  let point1 = false, point2 = false

  for (let index in this.lines) {
    for (let mindex in this.markers) {
      const marker = this.markers[mindex]
      // console.log(this.lines[index], index);

      if (marker.config.name === this.lines[index].config.from) {
        point1 = this.getMarkerPosition(marker.config)
      }

      if (marker.config.name === this.lines[index].config.to) {
        point2 = this.getMarkerPosition(marker.config)
      }
    }

    if (point1 !== false && point2 !== false) {
      this.lines[index].setStyle({
        x1: point1.x,
        y1: point1.y,
        x2: point2.x,
        y2: point2.y,
      })
    }
  }
}