import JsVMapDOMHandler from '../JsVMapDOMHandler'
import DeepMerge from './DeepMerge'

/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */
const Util = {

  isImageUrl(url) {
    return /\.(jpg|gif|png)$/.test(url)
  },

  createEl(type, classes, text, html = false) {

    var el = document.createElement(type)

    if (text) {
      el[! html ? 'textContent' : 'innerHTML'] = text
    }

    if (classes) {
      el.className = classes
    }

    return el
  },

  $(selector) {
    return new JsVMapDOMHandler(selector)
  },

  hyphenate(string) {
    return string.replace(/[\w]([A-Z])/g, (m) => {
        return m[0] + "-" + m[1]
    }).toLowerCase()
  },

  isFunc(fn) {
    return typeof fn === 'function'
  },

  isObject(obj) {
    return typeof obj === 'object'
  },

  isStr(str) {
    return typeof str === 'string'
  },

  isArr(array) {
    return Array.isArray(array)
  },

  merge(target, source) {
    return DeepMerge(target, source)
  },

}

export default Util