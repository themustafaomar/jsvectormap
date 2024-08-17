import { merge, getLineUid } from '../util'
import Line from '../components/line'

export default function createLines(lines) {
  const markers = this._markers
  const { style, elements: _, ...rest } = this.params.lines

  let point1 = false, point2 = false

  for (let index in lines) {
    const lineConfig = lines[index]

    for (let { config: markerConfig } of Object.values(markers)) {
      if (markerConfig.name === lineConfig.from) {
        point1 = this.getMarkerPosition(markerConfig)
      }

      if (markerConfig.name === lineConfig.to) {
        point2 = this.getMarkerPosition(markerConfig)
      }
    }

    if (point1 !== false && point2 !== false) {
      // Register lines with unique keys
      this._lines[getLineUid(lineConfig.from, lineConfig.to)] = new Line(
        {
          index,
          map: this,
          group: this._linesGroup,
          config: lineConfig,
          x1: point1.x,
          y1: point1.y,
          x2: point2.x,
          y2: point2.y,
          ...rest,
        },
        merge({ initial: style }, { initial: lineConfig.style || {} }, true)
      )
    }
  }
}