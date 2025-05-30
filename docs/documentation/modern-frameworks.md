---
title: Modern frameworks
metadata:
  title: Modern frameworks
description: Learn how to get started with JSVectorMap using different approaches, including CLI and manual integration.
---

This section covers the most ways to use jsvectormap with the modern frameworks like Vue and how to handle SSR issues.

## Vuejs

When working with Vue.js, you have two main options: you can either use the Vue wrapper component provided, or integrate it manually both approaches will be covered.

Let’s begin with global component registration in main.ts.

:::Code

```vue [app.vue]
<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'

const map = shallowRef()

onMounted(() => {
  map.value = new jsVectorMap({
    selector: '#map',
  })
})
</script>
```

```ts [main.ts]
import { createApp } from 'vue'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import 'jsvectormap/src/scss/jsvectormap.scss'

const app = createApp({
  //
})
```

:::

<!-- ```js
import { createApp } from 'vue'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import 'jsvectormap/src/scss/jsvectormap.scss'

const app = createApp({})

// pages/dashboard.vue

import { shallowRef, onMounted } from 'vue'

const map = shallowRef()

onMounted(() => {
  map.value = new jsVectorMap({
    selector: '#map',
  })
})
``` -->

## Nuxtjs

You can still use the wrapper component it works perfectly well.

However, in this section, we’ll focus on how to integrate it manually, either globally or within a specific component.

### Globally

To register Jsvectormap globally in Nuxtjs app follow these steps.

Create a file in plugins directory and call it whatever you want, for example jsvectormap.js, now we need to register this plugin in nuxt.config.js.

```js
...

plugins: [
  { src: '@/plugins/jsvectormap.js', mode: 'client' }
],

...
```

In `@/plugins/jsvectormap.js`
```js
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/jvm-world-merc'
import 'jsvectormap/dist/css/jsvectormap.css'

// Or you can inject `jsVectorMap` constructor instead of window.
export default function (ctx, inject) {
  inject('jvm', jsVectorMap)
}
```

Now you have access to jsVectorMap constructor inside any local component.

```html
<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    const map = new jsVectorMap({
      selector: '#map',
      map: 'world_merc'
    })

    // Or using the injected key
    // const map = new this.$jvm({...})
  }
}
</script>
```

### Locally

You may want to use the map in a specific page, you can accomplish this by implementing this example.

```html
<template>
  <div id="map"></div>
</template>

<script>
const jsVectorMap = process.client ? require('jsvectormap') : {}

if (process.client) {
  require('jsvectormap/dist/maps/world-merc')
}

export default {
  data: () => ({
    map: null
  }),
  mounted() {
    this.map = new jsVectorMap({
      selector: '#map',
      map: 'world_merc'
    })
  }
}
</script>
```