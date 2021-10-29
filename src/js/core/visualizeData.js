import Util from '../util/index'
import DataVisualization from '../DataVisualization'

export default function visualizeData(data) {
  if (Util.isObj(data)) {
    this.dataVisualization = new DataVisualization(data, this)
  }
}
