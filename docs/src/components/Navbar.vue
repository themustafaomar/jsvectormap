<template>
  <div class="bg-white sticky top-0 z-40 w-full lg:z-50 shadow-md shadow-slate-600/5">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <a class="mr-3 overflow-hidden md:w-auto" href="/">
            <h5 class="font-semibold text-xl text-gray-600">
              <img src="/images/jsvectormap-logo.svg" width="113" alt="Jsvectormap logo" />
            </h5>
          </a>
          <nav class="hidden lg:block ml-auto">
            <ul class="flex space-x-8 text-sm leading-6 font-semibold text-gray-700">
              <li>
                <a class="hover:text-blue-500" href="/">Home</a>
              </li>
              <li>
                <a class="hover:text-blue-500" href="/docs/introduction">Docs</a>
              </li>
              <li>
                <a class="hover:text-blue-500" href="https://github.com/themustafaomar/jsvectormap/graphs/contributors">Contributors</a>
              </li>
              <li>
                <a href="https://github.com/themustafaomar/jsvectormap" class="block w-6 h-6 text-gray-400 hover:text-gray-500">
                  <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div class="ml-auto -my-1 lg:hidden">
            <button type="button" class="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600">
              <svg width="24" height="24" fill="none" aria-hidden="true">
                <path
                  d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-center p-4 border-b border-gray-900/10 lg:hidden">
        <button type="button" class="text-gray-500 hover:text-gray-600">
          <span class="sr-only">Navigation</span>
          <svg width="24" height="24">
            <path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
        <ul class="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
          <li class="flex items-center">
            {{ section.section }}
            <svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-gray-400">
              <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </li>
          <li class="font-semibold text-gray-900 truncate">{{ section.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ section: Object })
</script>