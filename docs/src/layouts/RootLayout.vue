<template>
  <router-view></router-view>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Jsvectormap',
  meta: [
    { name: 'keywords', content: 'jsvectormap, vector map, interative, map, svg, javascript' },
    { property: 'og:image', content: 'https://jvm-docs.vercel.app/images/jsvectormap.jpg' },
    { property: 'og:image:width', content: 1280 },
    { property: 'og:image:height', content: 720 },
    { name: 'twitter:card', content: 'summary' },
  ],
})
</script>

<style>
body {
  font-family: Inter var;
  /* background-image: url(/images/lines.svg); */
  background-repeat: repeat;
  background-position: center;
}
</style>