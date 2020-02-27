import Util from '../Util/Util'
import Events from '../Defaults/Events'
import EventEmitter from '../EventEmitter'

export default function bindEvents() {
  this.emitter = new EventEmitter()

  // Register events
  for (let event in Events) {
    if (Util.isFunc(this.params[event])) {
      this.emitter.on(Events[event], this.params[event])
    }
  }
}