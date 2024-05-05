<template>
  <div :id="uuid" class="mx-auto"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance, computed } from 'vue'
import config from '../samples'

const map = ref({})

const props = defineProps({
  __globalOptions__: Object,
  // options: Object,
  width: Number,
  height: Number,
  id: String
})

defineExpose({
  instance: map,
})

const uuid = computed(() => {
  return `__jvm__${getCurrentInstance().uid}`
})

onMounted(async () => {
  const vectorMap = (await import('jsvectormap/dist/js/jsvectormap')).default

  vectorMap.addMap('world_merc', (await import('../assets/js/world-merc')).default)

  map.value = new vectorMap({
    selector: `#${uuid.value}`,
    map: 'world_merc',
    zoomButtons: false,
    zoomOnScroll: false,
    regionStyle: { initial: { fill: '#d1d5db' } },
    labels: {
      markers: { render: marker => marker.name }
    },
    onLoaded() {
      window.addEventListener('resize', resizeMap)
    },
    ...props.__globalOptions__,
    ...config[props.id]?.(),
  })
})

onUnmounted(() => {
  map.value.destroy()
  window.removeEventListener('resize', resizeMap)
})

function resizeMap() {
  map.value.updateSize()
}
</script>

<style lang="scss">
$tooltip-bg-color: theme('colors.blue[500]');

@import 'jsvectormap';

.jvm-container {
  width: 100%;
  height: 350px;

  @media (max-width: theme('screens.lg')) {
    width: 450px;
    height: 250px;
  }

  @media (max-width: theme('screens.md')) {
    width: 375px;
    height: 200px;
  }
}
</style>