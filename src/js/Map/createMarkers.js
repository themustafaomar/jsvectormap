import Util from '../Util/Util'
import Marker from '../Marker'

export default function createMarkers(markers, isRecentlyCreated) {
  let marker, point/* , markers = { ...markers } */

  // Create groups for holding markers and markers labels
  // we check if markersGroup is existed or not becuase we may add markers after the map has loaded
  // so we will append the futured markers to this group as well.
  this.markersGroup = this.markersGroup || this.canvas.createGroup()
  this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.createGroup()

  for (let index in markers) {

    point = this.getMarkerPosition(markers[index])

    if (point !== false) {
      marker = new Marker({
        index,
        map: this,
        // Merge the markerStyle object with the marker config style
        style: Util.merge(this.params.markerStyle, { initial: markers[index].style || {} }),
        label: (this.params.labels && this.params.labels.markers),
        labelsGroup: this.markerLabelsGroup,
        cx: point.x,
        cy: point.y,
        group: this.markersGroup,
        // @todo: this may be a little bit complicated :(
        // When adding a new marker by submitting some button and labels key is existed and has render function
        // the render function may returns something like that: return markers[index].name;
        // it will throw an error and the label won't be shown: this was made to show the label
        // an example for this problem will be in examples directory (addmarkers.html)
        isRecentlyCreated: isRecentlyCreated ? markers[index] : false,
      })

      // Check for marker duplication
      // this is useful when for example: a user clicks a button for creating marker two times
      // so it will remove the old one and the new one will take its place.
      if (this.markers[index]) {
        this.removeMarkers([index])
      }

      this.markers[index] = {
        element: marker, config: markers[index]
      }
    }
  }
}