import Util from '../Util/Util'
import Marker from '../Marker'

export default function createMarkers(markers = {}, isRecentlyCreated = false) {
  let markerConfig, marker, point, uid

  // Create groups for holding markers and markers labels
  // We're checking if `markersGroup` exists or not becuase we may add markers after the map has loaded
  // So we will append the futured markers to this group as well.
  this.markersGroup = this.markersGroup || this.canvas.createGroup('jvm-markers-group')
  this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.createGroup('jvm-markers-labels-group')

  for (let index in markers) {
    markerConfig = markers[index]
    point = this.getMarkerPosition(markerConfig)
    uid = markerConfig.coords.join(':')

    // We're checking if recently created marker is already exists
    // If exists we don't need to create it again, so we'll continute
    // Becuase we may have more than one marker.
    if (isRecentlyCreated) {
      if (
        Util.keys(this.markers).filter(i => this.markers[i]._uid === uid).length
      ) {
        continue
      }

      index = Util.keys(this.markers).length
    }

    if (point !== false) {
      marker = new Marker({
        index,
        map: this,
        // Merge the `markerStyle` object with the marker config `style` if presented.
        style: Util.mergeDeeply(this.params.markerStyle, { initial: markerConfig.style || {} }),
        label: this.params.labels && this.params.labels.markers,
        labelsGroup: this.markerLabelsGroup,
        cx: point.x,
        cy: point.y,
        group: this.markersGroup,
        marker: markerConfig,
        // @TODO: this may be a little bit complicated :(
        // When adding a new marker by `addMarker` method and labels.markers.render() key exists
        // the render function may returns something like that: return markers[name].name;
        // it will throw an error and the label won't be shown: this was created to solve showing the label
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
        config: markerConfig,
        element: marker
      }
    }
  }
}
