<script setup>
const options = {
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United Kingdom', coords: [55.3781, 3.4360] },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      style: { fill: 'red' }
    },
  ],
}
</script>

<template>
  <vector-map :options width="400px" height="250px" />
</template>
