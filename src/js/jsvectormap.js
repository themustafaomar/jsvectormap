/**
 * jsVectorMap
 * Copyrights (c) Mustafa Omar https://github.com/themustafaomar
 * Released under the MIT License.
 */
import './util/pollyfills'
import Map from './map'

import '../scss/jsvectormap.scss'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class jsVectorMap {
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

export default jsVectorMap