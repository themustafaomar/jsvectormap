
let eventRegistry = {}
let eventUid = 1

/**
 * ------------------------------------------------------------------------
 * Event Handler
 * ------------------------------------------------------------------------
 */
const EventHandler = {
  on(element, event, handler) {
    eventRegistry[`jvm:${event}::${eventUid++}`] = {
      selector: element,
      handler,
    }

    element.addEventListener(event, handler)
  },
  off(element, event, handler) {
    const eventType = event.split(':')[1]

    element.removeEventListener(eventType, handler)

    // Remove reference
    delete eventRegistry[event]
  },
  getEventRegistry() {
    return eventRegistry
  },
}

export default EventHandler