---
title: 'Vue.js'
description: This section explains how to work with Vuevectormap package, a simple Vue.js wrapper component for Jsvectormap.
---

## Demo
Example at [vuevectormap](https://codepen.io/themustafaomar/pen/pojyerx).<br>
Example at [codesandbox](https://4f9cw.csb.app) and [code](https://codesandbox.io/s/vuevectormap-4f9cw).

## Installation

To get started using `Vuevectormap` you will need to install this package via `npm`.

For Vue.js v2 support please visit the master branch in the [offical repository](https://github.com/themustafaomar/vuevectormap/tree/master).

```bash
$ npm i vuevectormap@next
```

## Basic usage

To start using `Vuevectormap` in your project, all you need is to follow these steps.

```js
import { createApp } from 'vue'
import VueVectorMap from 'vuevectormap'
import 'vuevectormap/src/scss/vuevectormap.scss'

// Import your preferred map
require('jsvectormap/dist/maps/world')

const app = createApp({})

app.use(VueVectorMap, {
  // Set global options if any.
  backgroundColor: '#f6f6f6'
})

app.mount('#app')
```

Now we're ready to add the vuevectormap component and we're done! and **notice**: the default map is `world`, so you don't have to pass map prop, if you want to use another map consider passing `map` option to the component.

```html
<template>
  <div class="...">
    <vuevectormap
      width="700"
      height="350"
      :options="{
        // Map options..
        // markers: []
        // markerStyle: {}
        // etc..
      }">
    </vuevectormap>
  </div>
</template>
```

**Tip:** if you're using sass and and you want to overwrite the default style, the below snippet is for you.<br>
Look at [this file](https://github.com/themustafaomar/jsvectormap/blob/master/src/scss/jsvectormap.scss) to know about all possible variables.

```scss
// Example variables.
$tooltip-bg-color: #3a3d4c;
$tooltip-font-family: Roboto, Etc;

@import 'jsvectormap';
```