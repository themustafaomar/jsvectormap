<script setup>
const markers = [
  { name: 'Russia', coords: [61.524, 105.3188] },
  { name: 'Canada', coords: [56.1304, -106.3468] },
  { name: 'Greenland', coords: [71.7069, -42.6043] },
  { name: 'Egypt', coords: [26.8206, 30.8025] },
  { name: 'Brazil', coords: [-14.2350, -51.9253] },
  { name: 'China', coords: [35.8617, 104.1954] },
  { name: 'United States', coords: [37.0902, -95.7129] },
  { name: 'Norway', coords: [60.472024, 8.468946] },
  { name: 'Ukraine', coords: [48.379433, 31.16558] },
]

const series = {
  markers: [
    {
      attribute: 'fill',
      legend: {},
      scale: {
        'Asian': '#e7000b',
        'West': '#0084d1',
      },
      values: {
        0: 'West',
        1: 'Asian',
        2: 'West',
        3: 'Asian',
        4: 'West',
        5: 'Asian',
        6: 'West',
        7: 'West',
        8: 'Asian',
      },
    },
  ],
}

const options = {
  markers,
  series,
}
</script>

<template>
  <vector-map :options height="250px" />
</template>
