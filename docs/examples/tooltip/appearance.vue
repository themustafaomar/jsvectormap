<script setup>
const markers = [
  { name: 'Egypt', coords: [26.8206, 30.8025], population: '114.5 million', },
  { name: 'United Kingdom', coords: [55.3781, 3.4360], population: '68.35 million', },
  { name: 'United States', coords: [37.0902, -95.7129], population: '340.1 million' },
]

const options = {
  labels: { markers: { render: marker => marker.name } },
  markers,
  onRegionTooltipShow(event, tooltip, code) {
    const html = `
      <h5>${code}</h5>
      <p class="text-xs">Hello this is a text.</p>
    `
    tooltip.text(html, true)
  },
  onMarkerTooltipShow(event, tooltip, index) {
    const marker = markers[index]
    const html = `
      <h5>${marker.name}</h5>
      <p class="text-xs">Population: ${marker.population}</p>
    `
    tooltip.text(html, true)
  }
}
</script>

<template>
  <vector-map :options width="400px" height="250px" />
</template>