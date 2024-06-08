<template>
  <div class="_toc hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-14 xl:pr-6">
    <h2 id="on-this-page-title" class="font-display text-sm font-medium text-slate-900">On this page</h2>

    <ol v-if="toc.length" role="list" class="mt-4 space-y-3 text-sm">
      <template v-for="section in toc" :key="section.name">
        <li>
          <h3 >
            <a :href="section.hash" class="link-point font-medium text-slate-700 hover:text-slate-800">{{ section.name }}</a>
          </h3>
          <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-700">
            <li v-for="child in section.children" class="flex">
              <svg class="w-2 text-gray-400 mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </svg>
              <a :href="child.hash" class="link-point">{{ child.name }}</a>
            </li>
          </ol>
        </li>
      </template>
    </ol>

    <div v-else class="mt-5">
      <h4 class="text-xl font-semibold mb-2">@nope</h4>
      <p class="text-sm">There're no any sections here.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const ACTIVE_CLASS = '!text-blue-600'
const TOC_CONTAINER_CLASS = '._toc'

defineProps({ toc: Object })

onMounted(() => {
  window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})

const scrollListener = () => {
  const scrollPosition = document.documentElement.scrollTop
  const elements = document.querySelectorAll('.markdown-body .heading')
  const sections = []

  Array.prototype.forEach.call(elements, el => {
    sections.push({ id: el.id, offset: el.offsetTop - 25 })
  })

  for (let section of sections) {
    if (section.offset <= scrollPosition) {
      const active = getElement(`${TOC_CONTAINER_CLASS} a.\\${ACTIVE_CLASS}`)
      if (active) {
        active.classList.remove(ACTIVE_CLASS)
      }

      getElement(`${TOC_CONTAINER_CLASS} a[href*=${section.id}]`)
        .classList
        .add('class', ACTIVE_CLASS)
    }
  }
}

const getElement = (selector) => {
  return document.querySelector(selector)
}
</script>