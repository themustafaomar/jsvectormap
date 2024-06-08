---
title: 'Modern frameworks'
description: This section covers the most ways to use jsvectormap with the modern frameworks like Vue and how to handle SSR issues.
---

## Vuejs

When it comes to Vue js, you have two choices, the first one is to use the Vue [wrapper component](https://github.com/themustafaomar/vuevectormap) or you can do that manually as we'll see now.

Let's start with global registration, in `app.js`.

```js
import { createApp } from 'vue'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world-merc'
import 'jsvectormap/src/scss/jsvectormap.scss'

const app = createApp({})

// pages/dashboard.vue

// <script>
export default {
  ...
  mounted() {
    const map = new jsVectorMap({
      selector: '#map',
      map: 'world_merc',
    })
  }
  ...
}
// </script>
```

### Locally

Or you can use it in a specific component, for example `pages/dashboard.vue`.

```html
<template>
  <div id="map"></div>
</template>

<script>
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world-merc'
import 'jsvectormap/src/scss/jsvectormap.scss'

export default {
  data: () => ({
    map: null
  }),
  mounted() {
    this.map = new jsVectorMap({
      selector: '#map',
      map: 'world_merc',
    })
  }
}
</script>
```

## Nuxtjs

You still can use the [wrapper component](https://github.com/themustafaomar/vuevectormap) it's working perfectly fine, but in this section I'll explain how to use it manually, globally or in a component.

### Globally

To register Jsvectormap globally in Nuxtjs app follow these steps.

Create a file in plugins directory and call it whatever you want, for example `jsvectormap.js`, now we need to register this plugin in `nuxt.config.js`.

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

## Vitejs project

@Coming soon

## React

Unfortunately, I'm not familiar with React, however, here is an example at [codesandbox](https://codesandbox.io/s/15s9g) feel free to contribute to the documentation about React section.