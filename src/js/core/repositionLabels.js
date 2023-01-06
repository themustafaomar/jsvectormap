export default function repositionLabels() {
  const labels = this.params.labels

  if (!labels) {
    return
  }

  // Regions labels
  if (labels.regions) {
    for (let key in this.regions) {
      this.regions[key].element.updateLabelPosition()
    }
  }

  // Markers labels
  if (labels.markers) {
    for (let key in this._markers) {
      this._markers[key].element.updateLabelPosition()
    }
  }
}