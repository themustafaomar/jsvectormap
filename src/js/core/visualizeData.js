import DataVisualization from '../dataVisualization'

export default function visualizeData(data) {
  if (typeof data === 'object') {
    this.dataVisualization = new DataVisualization(data, this)
  }
}