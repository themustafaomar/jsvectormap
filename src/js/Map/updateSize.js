export default function updateSize() {
  this.width = this.container.width()
  this.height = this.container.height()
  this.resize()
  this.canvas.setSize(this.width, this.height)
  this.applyTransform()
}
