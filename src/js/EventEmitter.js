import Util from './Util/Util'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class EventEmitter {
	constructor() {
    this.events = {}
	}

  on(event, listener) {
		if (!Util.isObject(this.events[event])) {
			this.events[event] = []
		}

		this.events[event].push(listener)
		return () => this.removeListener(event, listener)
	}

  emit(event, args) {
    if (Util.isObject(this.events[event])) {
      this.events[event].forEach(listener => listener.apply(null, args))
    }
	}

  removeListener(event, listener) {
    if (Util.isObject(this.events[event])) {
			const idx = this.events[event].indexOf(listener)

			if (idx > -1) {
				this.events[event].splice(idx, 1)
			}
    }
	}
}

export default EventEmitter