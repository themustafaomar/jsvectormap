---
title: 'Labels'
description: Label is a text or symbol that produces a description or information the object it is attached to
menu: Labels
category: config options
position: 4
---

## Labels with markers
You may want to add a label besides the marker that describes something, or showing the region name (I highly recommend showing the region name besides the marker, as it gives a better looking!)

**Notice**: you have access to the whole marker object not just the `name`, this means you can define any property and access it inside the `render` function.

```js
const map = new jsVectorMap({
  markers: [
    { name: "Egypt", coords: [26.8206, 30.8025] },
    { coords: [56.1304, 106.3468], labelName: 'Hello Canada' },
    { coords: [48.379433, 31.16558] }
  ],
  labels: {
    markers: {
      // Starting from jsvectormap v1.2 the render function receives
      // the marker object as a first parameter and index as the second.
      render(marker, index) {
        return marker.name || marker.labelName || 'Not available'
      }
    }
  }
})
```

## Labels with regions
You may also want to add a label for a certain region.

```js
const map = new jsVectorMap({
  labels: {
    regions: {
      // The render's region receives region `code`
      render(code) {
        return ['EG', 'US', 'CH'].indexOf(code) > -1 ? code : null
      }
    }
  }
})
```

## Labels offsets
You may want to control the space between the marker and labele by incrementing or decrementing margins.

```js
const markers = [
  { coords: [26.8206, 30.8025], offsets: [14, 10] },
  { coords: [56.1304, 106.3468], offsets: [7, 7] },
  { coords: [48.379433, 31.16558] },
]

const map = new jsVectorMap({
  labels: {
    markers: {
      // Returns something like this: [[14, 10], [7, 7], [0, 0]]
      offsets: markers.map(marker => marker.offsets || [0, 0]),

      // Or you can return a function
      offsets(index) {
        return markers[index].offsets
      }
    },
    regions: {
      offsets: [[5, 10], [7, 12], [4, 5]],

      // Or you can return a function
      offsets(index) {}
    }
  }
})
```