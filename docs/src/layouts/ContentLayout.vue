<template>
  <navbar
    :section="{
      title: frontmatter.title,
      section: $route.meta.section
    }">
  </navbar>
  <div ref="article" class="relative flex justify-center mx-auto max-w-screen-xl lg:px-6">
    <sidebar />

    <div class="max-w-2xl flex-auto px-4 py-14 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-14 w-3/5">
      <article>
        <div class="max-w-3xl mx-auto xl:max-w-none xl:ml-0">
          <div class="flex items-center justify-between">
            <div>
              <h6 class="mb-1 text-sm leading-6 font-semibold text-sky-500">{{ $route.meta.section }}</h6>
              <h1 class="font-display text-3xl tracking-tight text-slate-900 font-bold">{{ frontmatter.title }}</h1>
            </div>
            <a :href="`https://github.com/themustafaomar/jvm-docs/tree/main${$route.path}.md`" class="flex items-center font-semibold text-gray-400 decoration-none text-xs bg-gray-50 px-2 py-1 rounded-xl">
              Edit this page
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <p class="mt-2 text-lg text-slate-600">{{ frontmatter.description }}</p>

          <div class="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-semibold lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-slate-500 prose-a:no-underline prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-md">
            <slot />
          </div>
        </div>
      </article>
    </div>
    <table-of-content style="width: 20%;" :toc="toc" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import TableOfContent from '../components/TableOfContent.vue'

defineProps({ frontmatter: Object })

const toc = ref([])
const article = ref()
const router = useRouter()

const go = () => {
  if (location.hash) {
    window.scrollTo({
      behavior: 'smooth',
      top: document.querySelector(decodeURIComponent(location.hash)).offsetTop - 25
    })
  }
}

onMounted(() => {
  toc.value = getToc()

  // Thanks for: https://github.com/antfu/
  const handleAnchors = (
    event
  ) => {
    const link = event.target.closest('.link-point')
    if (
      !event.defaultPrevented
      && link
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return
      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        go()
      } else {
        router.push({ path: pathname, hash })
      }
    }
  }

  window.addEventListener('hashchange', go)
  document.querySelector('body').addEventListener('click', handleAnchors, { passive: false })

  go()
  setTimeout(go, 500)
})

function getToc() {
  return Array.from(document.querySelector('.markdown-body').children)
    .filter(n => n.matches('h2'))
    .map(n => ({
      name: n.textContent,
      hash: `#${n.id}`,
      children: nextUntil(n, 'h2', 'h3').map(n => ({
        name: n.textContent,
        hash: `#${n.id}`,
      }))
    }))
}

// https://vanillajstoolkit.com/helpers/nextuntil
function nextUntil(elem, selector, filter) {
  const siblings = []

  elem = elem.nextElementSibling

  while (elem) {
    if (elem.matches(selector)) break

    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling
      continue
    }

    siblings.push(elem)

    elem = elem.nextElementSibling
  }

  return siblings
}
</script>