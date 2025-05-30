<script setup>
const options = {
  markers: [
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "Greenland", coords: [71.7069, -42.6043] },
    { name: "Egypt", coords: [26.8206, 30.8025], style: { initial: { fill: 'red' } } },
    { name: 'Brazil', coords: [-14.2350, -51.9253], style: { initial: { fill: 'red' } } },
    { name: 'China', coords: [35.8617, 104.1954], style: { initial: { fill: 'red' } } },
    { name: 'United States', coords: [37.0902, -95.7129] },
    { name: 'Ukraine', coords: [48.379433, 31.16558], style: { initial: { fill: 'red' } } },
  ],
  lines: [
    { from: 'Russia', to: 'Greenland' },
    { from: 'Russia', to: 'United States' },
    { from: 'Brazil', to: 'Ukraine' },
    { from: 'Brazil', to: 'Egypt' },
    { from: 'Brazil', to: 'China' },
  ],
  lineStyle: {
    strokeDasharray: '6 3 6',
    animation: true,
    curvature: -0.5,
  },
}
</script>

<template>
  <vector-map :options width="400px" height="250px" />
</template>
