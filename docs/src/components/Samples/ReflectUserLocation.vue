<template>
  <vector-map ref="map" class="mt-10" />
  <div class="flex justify-center">
    <div class="flex justify-center pt-5">
      <button @click="getLocation" :disabled="hasPosition" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">Find my location</button>
    </div>
    <div v-if="hasPosition" class="flex justify-center pt-5">
      <button @click="clearLocation" class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">Clear location</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReflectUserLocation',
  data: () => ({
    hasPosition: false
  }),
  methods: {
    async getLocation() {
      const response = await fetch('https://ipinfo.io/geo')
      const data = await response.json()

      this.hasPosition = true
      this.$refs.map.instance.addMarkers({
        coords: data.loc.split(','),
        name: `${data.city} - ${data.country} (${data.ip})`
      })
    },
    clearLocation() {
      this.hasPosition = false
      this.$refs.map.instance.removeMarkers()
    }
  }
}
</script>