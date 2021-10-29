export default function updateSize() {
  this.width = this.container.offsetWidth
  this.height = this.container.offsetHeight
  this.resize()
  this.canvas.setSize(this.width, this.height)
  this.applyTransform()
}
