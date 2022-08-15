import { merge } from '../util'
import Marker from '../components/marker'

export default function createMarkers(markers = {}, isRecentlyCreated = false) {
  let config, marker, point, uid

  // Create groups for holding markers and markers labels
  // We're checking if `markersGroup` exists or not becuase we may add markers after the map has loaded
  // So we will append the futured markers to this group as well.
  this._markersGroup = this._markersGroup || this.canvas.createGroup('jvm-markers-group')
  this._markerLabelsGroup = this._markerLabelsGroup || this.canvas.createGroup('jvm-markers-labels-group')

  for (let index in markers) {
    config = markers[index]
    point = this.getMarkerPosition(config)
    uid = config.coords.join(':')

    if (!point) {
      continue
    }

    // We're checking if recently created marker does already exist
    // If exists we don't need to create it again, so we'll continute
    // Becuase we may have more than one marker submitted via `addMarkers` method.
    if (isRecentlyCreated) {
      if (
        Object.keys(this.markers).filter(i => this.markers[i]._uid === uid).length
      ) {
        continue
      }

      index = Object.keys(this.markers).length
    }

    marker = new Marker({
      index,
      map: this,
      // Merge the `markerStyle` object with the marker config `style` if presented.
      style: merge(this.params.markerStyle, { initial: config.style || {} }, true),
      label: this.params.labels && this.params.labels.markers,
      labelsGroup: this._markerLabelsGroup,
      cx: point.x,
      cy: point.y,
      group: this._markersGroup,
      marker: config,
      isRecentlyCreated,
    })

    // Check for marker duplication
    // this is useful when for example: a user clicks a button for creating marker two times
    // so it will remove the old one and the new one will take its place.
    if (this.markers[index]) {
      this.removeMarkers([index])
    }

    this.markers[index] = {
      _uid: uid,
      config: config,
      element: marker
    }
  }
}