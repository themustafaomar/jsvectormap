<template>
  <vector-map ref="map" class="mt-10" />
  <div class="flex justify-center pt-5">
    <button @click="request" :disabled="hasPosition" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">Request location</button>
  </div>
</template>

<script>
export default {
  name: 'ReflectUserLocation',
  data: () => ({
    hasPosition: false
  }),
  methods: {
    request() {
      const map = this.$refs.map
      navigator.geolocation.getCurrentPosition((position) => {
        setTimeout(() => {
          map.instance.addMarkers({
            name: 'Egypt',
            coords: [position.coords.latitude, position.coords.longitude]
          })
          this.hasPosition = true
        }, 100)
      })
    }
  },
  mounted() {
    this.request()
  }
}
</script>