export default function updateSize() {
  this.width = this.container.offsetWidth
  this.height = this.container.offsetHeight
  this._resize()
  this.canvas.setSize(this.width, this.height)
  this._applyTransform()
}