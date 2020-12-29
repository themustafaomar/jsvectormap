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
    initial: {
      stroke: '#808080',
      strokeWidth: 1,
      strokeLinecap: 'round',
    },
    hover: {
      stroke: '#A9A9A9',
      cursor: 'pointer',
      strokeWidth: 3
    },
    selected: {
      stroke: '#696969'
    },
    selectedHover: {}
  },




  /**
   * Markers options
   */
  markersSelectable: false,
  markersSelectableOne: false,
  markerStyle: {  // Marker style
    initial: {
      r: 7,
      fill: 'black',
      fillOpacity: 1,
      stroke: '#FFF',
      strokeWidth: 5,
      strokeOpacity: .65,
    },
    hover: {
      fill: '#3cc0ff',
      stroke: '#5cc0ff',
      cursor: 'pointer',
      strokeWidth: 2,
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
      fontWeight: 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  },




  /**
   * Region style
   */
  regionsSelectable: false,
  regionsSelectableOne: false,
  regionStyle: { // Region style
    initial: {
      fill: '#e3eaef',
      fillOpacity: 1,
      stroke: 'none',
      strokeWidth: 0,
      strokeOpacity: 1
    },
    hover: {
      fillOpacity: .7,
      cursor: 'pointer'
    },
    selected: {
      fill: '#000'
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
