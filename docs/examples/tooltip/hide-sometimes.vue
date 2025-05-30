<script setup>
const options = {
  onRegionTooltipShow(event, tooltip, code) {
    // Hide for all
    event.preventDefault()
    console.log('Tooltip for', code)

    // Or you can disable tooltip for certain regions
    if (['EG', 'US', 'GL'].indexOf(code) > -1) {
      event.preventDefault()
    }

    // Or enable certain regions
    if (['EG', 'RU'].indexOf(code) < 0) {
      event.preventDefault()
    }
  }
}
</script>

<template>
  <vector-map :options width="350px" height="200px"></vector-map>
</template>