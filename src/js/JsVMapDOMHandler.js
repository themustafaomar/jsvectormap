import Util from "./Util/Util";

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 * This class was designed to handle one single element
 * since we don't need to select more than one element in this plugin
 */
class JsVMapDOMHandler {
  constructor(selector) {
    if ((selector instanceof Element)) {
      this.selector = selector
      return this
    } else {
      this.selector = document.querySelector(selector)
      return this
    }
  }

  on(event, callback) {
    this.selector.addEventListener(event, callback)
    return this
  }

  delegate(selector, events, callback) {
    events = events.split(" ")

    for (let event in events) {
      this.on(events[event], e => {
        var target = e.target
        if (target.matches(selector)) callback.call(target, e)
      })
    }
  }

  css(properties) {
    for (let property in properties) {
      this.selector.style[property] = properties[property]
    }
    return this
  }

  text(string) {
    if (!string) {
      return this.selector.textContent
    } else {
      this.selector.textContent = string
    }
    return this
  }

  attr(attr, value) {
    if (attr && value) {
      this.selector.setAttribute(attr, value)

      return this
    }

    return this.selector.getAttribute(attr)
  }

  append(node) {
    this.selector.appendChild(node)
    return this
  }

  show() {
    this.css({
      display: 'block'
    })
  }

  hide() {
    this.css({
      display: 'none'
    })
  }

  height() {
    return this.selector.offsetHeight
  }

  width() {
    return this.selector.offsetWidth
  }
}

export default JsVMapDOMHandler