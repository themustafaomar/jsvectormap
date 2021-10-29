import { merge } from '../util/index'
import Line from '../elements/line'

function createLineUid(from, to) {
  return `${from.toLowerCase()}:to:${to.toLowerCase()}`
}

export default function createLines(lines, markers, isRecentlyCreated = false) {
  let line, point1 = false, point2 = false

  // Create group for holding lines
  // we're checking if `linesGroup` exists or not becuase we may add lines after the map has loaded
  // so we will append the futured lines to this group as well.
  this.linesGroup = this.linesGroup || this.canvas.createGroup('jvm-lines-group')

  for (let index in lines) {
    const lineConfig = lines[index]

    for (let mindex in markers) {
      const markerConfig = isRecentlyCreated ? markers[mindex].config : markers[mindex]

      if (markerConfig.name === lineConfig.from) {
        point1 = this.getMarkerPosition(markerConfig)
      }

      if (markerConfig.name === lineConfig.to) {
        point2 = this.getMarkerPosition(markerConfig)
      }
    }

    if (point1 !== false && point2 !== false) {
      line = new Line({
        index: index,
        map: this,
        // Merge the lineStyle object with the line config style
        style: merge({ initial: this.params.lineStyle }, {
          initial: lineConfig.style || {}
        }, true),
        x1: point1.x,
        y1: point1.y,
        x2: point2.x,
        y2: point2.y,
        group: this.linesGroup,
      })

      // Prevent line duplication elements in the DOM
      if (isRecentlyCreated) {
        Object.keys(this.lines).forEach(key => {
          if (key === createLineUid(lines[0].from, lines[0].to)) {
            this.lines[key].element.remove()
          }
        })
      }

      // Register lines with unique keys
      this.lines[createLineUid(lineConfig.from, lineConfig.to)] = {
        element: line, config: lineConfig
      }
    }
  }
}