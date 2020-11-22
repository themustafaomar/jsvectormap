import Util from '../Util/Util'
import EventHandler from '../EventHandler'

export default function handleZoomButtons() {
  var map = this,
    zoomin = Util.createEl('div', 'jsvmap-zoom-btn jsvmap-zoomin', '&#43;', true),
    zoomout = Util.createEl('div', 'jsvmap-zoom-btn jsvmap-zoomout', '&#x2212', true)

  this.container.append(zoomin).append(zoomout)

  EventHandler.on(zoomin, 'click', () => {
    this.setScale(
      map.scale * map.params.zoomStep,
      map.width / 2,
      map.height / 2,
      false,
      map.params.zoomAnimate
    )
  })

  EventHandler.on(zoomout, 'click', () => {
    this.setScale(
      map.scale / map.params.zoomStep,
      map.width / 2,
      map.height / 2,
      false,
      map.params.zoomAnimate
    )
  })
}