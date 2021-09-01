let eventRegistry = {}
let eventUid = 1

/**
 * ------------------------------------------------------------------------
 * Event Handler
 * ------------------------------------------------------------------------
 */
const EventHandler = {
  on(element, event, handler, options = {}) {
    const uid = `jvm:${event}::${eventUid++}`

    eventRegistry[uid] = {
      selector: element,
      handler,
    }

    handler._uid = uid

    element.addEventListener(event, handler, options)
  },
  off(element, event, handler) {
    const eventType = event.split(':')[1]

    element.removeEventListener(eventType, handler)

    // Remove reference
    delete eventRegistry[handler._uid]
  },
  getEventRegistry() {
    return eventRegistry
  },
}

export default EventHandler
