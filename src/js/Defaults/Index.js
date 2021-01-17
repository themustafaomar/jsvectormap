export default {
  map: 'world',
  backgroundColor: 'tranparent',
  draggable: true,
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  zoomMax: 12,
  zoomMin: 1,
  zoomAnimate: true,
  showTooltip: true,
  zoomStep: 1.5,
  bindTouchEvents: true,




  /**
   * Lines options
   */
  lineStyle: {
    stroke: '#808080',
    strokeWidth: 1,
    strokeLinecap: 'round',
  },




  /**
   * Markers options
   */
  markersSelectable: false,
  markersSelectableOne: false,
  markerStyle: {  // Marker style
    initial: {
      r: 7,
      fill: '#374151',
      fillOpacity: 1,
      stroke: '#FFF',
      strokeWidth: 5,
      strokeOpacity: .5,
    },
    hover: {
      fill: '#3cc0ff',
      cursor: 'pointer',
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {}
  },

  // Marker Label style
  markerLabelStyle: {
    initial: {
      fontFamily: 'Verdana',
      fontSize: 12,
      fontWeight: 500,
      cursor: 'default',
      fill: '#374151'
    },
    hover: {
      cursor: 'pointer'
    },
    selected: {},
    selectedHover: {}
  },




  /**
   * Region style
   */
  regionsSelectable: false,
  regionsSelectableOne: false,
  regionStyle: {
    initial: {
      fill: '#dee2e8',
      fillOpacity: 1,
      stroke: 'none',
      strokeWidth: 0,
    },
    hover: {
      fillOpacity: .7,
      cursor: 'pointer'
    },
    selected: {
      fill: '#9ca3af'
    },
    selectedHover: {}
  },

  // Region label style
  regionLabelStyle: {
    initial: {
      fontFamily: 'Verdana',
      fontSize: '12',
      fontWeight: 'bold',
      cursor: 'default',
      fill: '#35373e'
    },
    hover: {
      cursor: 'pointer'
    }
  },
}
