import Util from '../Util/Util'
import Line from '../Line'

export default function createLines(lines, markers) {
  let line, point1 = false, point2 = false

  // Create group for holding lines
  // we're checking if `linesGroup` exists or not becuase we may add lines after the map has loaded
  // so we will append the futured lines to this group as well.
  this.linesGroup = this.linesGroup || this.canvas.createGroup(null, 'lines-group')

  for (let index in lines) {
    for (let mindex in markers) {
      if (markers[mindex].name === lines[index].from) {
        point1 = this.getMarkerPosition(markers[mindex])
      }
      if (markers[mindex].name === lines[index].to) {
        point2 = this.getMarkerPosition(markers[mindex])
      }
    }
    if (point1 !== false && point2 !== false) {
      line = new Line({
        index: index,
        map: this,
        // Merge the lineStyle object with the line config style
        style: Util.merge(this.params.lineStyle, {
          initial: lines[index].style || {}
        }),
        x1: point1.x,
        y1: point1.y,
        x2: point2.x,
        y2: point2.y,
        group: this.linesGroup,
      })

      this.lines[index] = {
        element: line, config: lines[index]
      }
    }
  }
}
