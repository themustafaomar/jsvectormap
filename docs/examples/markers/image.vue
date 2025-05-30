<script setup>
const options = {
  markerStyle: {
    initial: { image: '/pin.png' },
  },
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    {
      name: 'United Kingdom',
      coords: [55.3781, 3.4360],
      // Add a marker image for this particular marker.
      style: { image: '/pin.png' },
    },
  ],
}
</script>

<template>
  <vector-map :options width="400px" height="250px" />
</template>
