---
title: Basic Usage
metadata:
  title: Basic Usage
description: This section provides different ways to get started with jsvectormap, whether you're using a module bundler or manually adding the library.  
---

This section provides different ways to get started with jsvectormap, whether you're using a module bundler or manually adding the library.

## Usage  

If you're using **Webpack**, **Vite**, or any module bundler, you need to import jsvectormap and the specific map you want to use.  

:::Code

```html [index.html]
<div id="map"></div>
```

```js [app.js]
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/jsvectormap.min.css'
import 'jsvectormap/dist/maps/world'

const map = new jsVectorMap({
  selector: '#map',
  map: 'world',
})
```

:::

## CDN

For quick usage, you can load jsvectormap directly from a CDN:

:::Code

```html [index.html]
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap/dist/jsvectormap.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/jsvectormap"></script>
  <script src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"></script>
</head>

<body>
  <div id="map"></div>
</body>
```

```js [app.js]
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/jsvectormap.min.css'
import 'jsvectormap/dist/maps/world'

const map = new jsVectorMap({
  selector: '#map',
  map: 'world',
})
```

:::
