<template>
  <div class="hidden lg:block sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-1/5 overflow-y-auto overflow-x-hidden py-10 pl-0.5">
    <ul class="text-base lg:text-sm space-y-9">
      <li v-for="(group, index) in pages" :key="index">
        <h5 class="mb-8 lg:mb-3 font-medium text-slate-900 text-[.925rem]">{{ group.name }}</h5>
        <ul class="lg:space-y-3.5">
          <li v-for="(link, i) in group.children || []" :key="i" class="relative">
            <a v-if="link.external" :href="link.to" class="block text-gray-700 hover:text-blue-600">{{ link.name }}</a>
            <router-link
              v-else
              class="block text-gray-600 hover:text-blue-600"
              :to="`/docs/${link.to}`"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import pages from '../routing/pages'
</script>