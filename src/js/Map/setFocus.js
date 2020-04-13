import Util from '../Util/Util'

export default function setFocus(config) {
	let bbox, codes

	config = config || {}

	if (config.region && Util.isStr(config.region)) {
		codes = [config.region]
	} else if (config.regions && Util.isArr(config.regions)) {
		codes = config.regions
	}

	if (codes) {
		codes.forEach((code) => {

			// Check if the region code is valid.
			if (this.regions[code]) {
				let itemBbox = this.regions[code].element.shape.getBBox()
	
				if (itemBbox) {
					// Handle the first loop
					if (typeof bbox == 'undefined') {
						bbox = itemBbox
					} else {
						// get the old bbox properties plus the current
						// this kinda incrementing the old values and the new values
						bbox = {
							x: Math.min(bbox.x, itemBbox.x),
							y: Math.min(bbox.y, itemBbox.y),
							width: Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) - Math.min(bbox.x, itemBbox.x),
							height: Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) - Math.min(bbox.y, itemBbox.y)
						}
					}
				}
			}
		})

		return this.setScale(
			Math.min(this.width / bbox.width, this.height / bbox.height),
			- (bbox.x + bbox.width / 2),
			- (bbox.y + bbox.height / 2),
			true,
			config.animate
		)
	}
}