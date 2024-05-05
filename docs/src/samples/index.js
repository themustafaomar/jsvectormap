const main = () => ({
  map: 'world_merc',
  zoomOnScroll: false,
  markers: [
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "Canada", coords: [56.1304, -106.3468] },
    { name: "Greenland", coords: [71.7069, -42.6043] },
    { name: "Egypt", coords: [26.8206, 30.8025], style: { fill: 'red' } },
    { name: 'Brazil', coords: [-14.2350, -51.9253], style: { fill: 'red' } },
    { name: 'China', coords: [35.8617, 104.1954], style: { fill: 'red' } },
    { name: 'United States', coords: [37.0902, -95.7129] },
    { name: 'Norway', coords: [60.472024, 8.468946], style: { fill: 'red' } },
    { name: 'Ukraine', coords: [48.379433, 31.16558], style: { fill: 'red' } },
  ],
  lines: [
    { from: 'Russia', to: 'Greenland' },
    { from: 'Russia', to: 'United States' },
    { from: 'Russia', to: 'Canada' },
    { from: 'Brazil', to: 'Norway' },
    { from: 'Brazil', to: 'Ukraine' },
    { from: 'Brazil', to: 'Egypt' },
    { from: 'Brazil', to: 'China' },
  ],
  markerStyle: {
    initial: { fill: "#5c5cff" },
    selected: { fill: "#ff5050" }
  },
  markerLabelStyle: {
    initial: {
      fontFamily: "`Sego UI`, sans-serif",
      fontSize: 13
    }
  },
  lineStyle: {
    strokeDasharray: '6 3 6',
    animation: true
  },
})

const introduction = () => ({
  selectedMarkers: [1,4],
  markers: [
    { name: 'Palestine', coords: [31.9474,35.2272] },
    { name: 'Russia', coords: [61.524,105.3188] },
    { name: 'Canada', coords: [56.1304,-106.3468] },
    { name: 'Greenland', coords: [71.7069,-42.6043] },
    { name: 'Brazil', coords: [-14.235,-51.9253] }
  ],
  markerStyle: {
    initial: { fill: '#5c5cff' },
    selected: { fill: '#ff5050' }
  }
})

const markersIntro = () => ({
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United Kingdom', coords: [55.3781, 3.4360] },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      style: { fill: 'red' }
    }
  ]
})

const markersImageMarker = () => ({
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United States', coords: [37.0902, -95.7129] },
    {
      name: 'United Kingdom',
      coords: [55.3781, 3.4360],
      style: {
        image: '/images/pin.png'
      }
    },
  ]
})

const linesIntro = () => ({
  markers: [
    { name: 'Foo', coords: [-14.2350, -51.9253] },
    { name: 'Bar', coords: [35.8617, 104.1954] }
  ],
  lines: [{
    from: 'Foo',
    to: 'Bar',
    style: {
      stroke: 'red',
      strokeWidth: 1.5
    }
  }]
})

const linesStyle = () => ({
  markers: [
    { name: 'Foo', coords: [-14.2350, -51.9253] },
    { name: 'Bar', coords: [35.8617, 104.1954] }
  ],
  lineStyle: {
    stroke: '#676767',
    strokeWidth: 1.5,
    strokeDasharray: '6 3 6',
    animation: true
  },
  lines: [{ from: 'Foo', to: 'Bar' }]
})

const labelsIntro = () => ({
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { coords: [56.1304, 106.3468], labelName: 'Hello Canada' },
    { coords: [48.379433, 31.16558] }
  ],
  labels: {
    markers: {
      render(marker, index) {
        return marker.name || marker.labelName || 'Not available'
      }
    }
  }
})

const labelsOffsets = () => ({
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025], offsets: [14, 10] },
    { name: 'Russia', coords: [56.1304, 106.3468], offsets: [7, -7] },
    { name: 'Romania', coords: [48.379433, 31.16558] }
  ],
  labels: {
    markers: {
      render: (marker) => marker.name,
      offsets: [[14,10], [7,-7], [0, 0]]
    },
  }
})

const tooltipAppearance = () => ({
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025], offsets: [14, 10] },
    { name: 'Romania', coords: [48.379433, 31.16558] }
  ],
  onRegionTooltipShow(event, tooltip, code) {
    tooltip.text(
      `<h5>${tooltip.text()} - Country</h5>` +
      `<p class="text-xs">This message is gonna appear when hovering over every single reion.</p>`,
      true // Enables HTML
    )
  },
})

const seriesMarkers = () => ({
  series: {
    markers: [{
      attribute: 'fill',
      legend: { title: 'Some title' },
      scale: { mScale1:'#ffc371', mScale2: '#ff5f6d' },
      values: { 0: 'mScale1', 1: 'mScale2', 2: 'mScale2' }
    }]
  },
  markers: [
    { coords: [61,105] },
    { coords: [72,-42] },
    { coords: [56,-106] },
    { coords: [31.5,34.8] },
    { coords: [-14.235,-51.9253] },
    { coords: [35.8617,104.1954] },
  ]
})

const seriesRegions = () => ({
  series: {
    regions: [{
      attribute: 'fill',
      legend: { title: 'Some title' },
      scale: {
        'My scale 1': '#ffc371',
        'My scale 2': '#c79efd',
        'My scale 3': '#08d191'
      },
      values: {
        'CN': 'My scale 1',
        'MX': 'My scale 2',
        'LY': 'My scale 2',
        'RU': 'My scale 3'
      }
    }]
  }
})

export default {
  main,
  introduction,
  markersIntro,
  markersImageMarker,
  linesIntro,
  linesStyle,
  labelsIntro,
  labelsOffsets,
  tooltipAppearance,
  seriesMarkers,
  seriesRegions,
}