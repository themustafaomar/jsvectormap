import DomHandler from '../DomHandler'
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

  createElement(type, classes, text, html = false) {
    var el = document.createElement(type)

    if (text) {
      el[! html ? 'textContent' : 'innerHTML'] = text
    }

    if (classes) {
      el.className = classes
    }

    return el
  },

  $: selector => new DomHandler(selector),

  hyphenate: string => string.replace(/[\w]([A-Z])/g, m => `${m[0]}-${m[1]}`).toLowerCase(),

  isFunc: fn => typeof fn === 'function',

  isObj: obj => typeof obj === 'object',

  isStr: str => typeof str === 'string',

  isArr: array => Array.isArray(array),

  merge: (target, source) => Object.assign(target, source),

  mergeDeeply: (target, source) => DeepMerge(target, source),

  keys: object => Object.keys(object)
}

export default Util
