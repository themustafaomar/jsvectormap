/**
 * JsVectorMap
 * Copyrights (c) Mustafa Omar https://github.com/themustafaomar
 * Released under the MIT License.
 */
import './Util/Polyfills'
import Map from './Map'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class JsVectorMap {
  constructor(options = {}) {
    if (! options.selector) {
      throw new Error('Selector is not given.')
    }

    return new Map(options)
  }

  // Public

  addMap(name, map) {
		Map.maps[name] = map
  }

}

export default window.jsVectorMap = window.JsVectorMap = JsVectorMap