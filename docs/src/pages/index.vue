<template>
  <Navbar
    :section="{
      title: 'Home',
      section: 'jvm/docs'
    }">
  </Navbar>

  <div class="max-w-4xl m-auto text-center mt-10 sm:mt-20">
    <vector-map id="main"></vector-map>
    <h1 class="text-3xl sm:text-4xl font-semibold text-center mb-3">Jsvectormap</h1>
    <p class="max-w-3xl m-auto">Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization, supports all modern browsers including IE9+.</p>
    <div class="mt-4">
      <router-link to="/docs/introduction" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2">
        Discover now
      </router-link>
      <a href="https://github.com/themustafaomar/jsvectormap" type="button" class="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
        Visit Github repo
      </a>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import Navbar from '../components/Navbar.vue'

const content = 'Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization, supports all modern browsers including IE9+.'

useHead({
  meta: [
    { name: 'description', content },
    { property: 'og:title', content: 'Jsvectormap' },
    { property: 'og:description', content },
  ],
})
</script>
