<script setup>
const options = {
  map: 'world_merc',
  zoomOnScroll: false,
  markers: [
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "Canada", coords: [56.1304, -106.3468] },
    { name: "Greenland", coords: [71.7069, -42.6043] },
    { name: 'Brazil', coords: [-14.2350, -51.9253], style: { initial: { fill: 'red' } } },
    { name: 'China', coords: [35.8617, 104.1954], style: { initial: { fill: 'red' } } },
    { name: 'United States', coords: [37.0902, -95.7129] },
    { name: 'Norway', coords: [60.472024, 8.468946], style: { initial: { fill: 'red' } } },
    { name: 'Palestine', coords: [31.9522, 35.2332], style: { initial: { fill: 'red' } } },
  ],
  lines: [
    { from: 'Russia', to: 'Greenland' },
    { from: 'Russia', to: 'United States' },
    { from: 'Russia', to: 'Canada' },
    { from: 'Brazil', to: 'Norway' },
    { from: 'Brazil', to: 'Palestine' },
    { from: 'Brazil', to: 'China' },
  ],
  markerStyle: {
    initial: { fill: "#3b82f6" },
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
    animation: true,
    curvature: -0.5,
  },
}
</script>

<template>
  <vector-map :options width="400px" height="300px" />
</template>
