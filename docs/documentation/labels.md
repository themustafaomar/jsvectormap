---
title: Labels
metadata:
  title: Labels
description: Label is a text or symbol that produces a description or information the object it is attached to.
---

Label is a text or symbol that produces a description or information the object it is attached to.

## Usage

You might want to add a label next to a marker to describe something, such as the region name.

**In fact**, displaying the region name next to the marker can greatly enhance the map's appearance.

**Note**: You have full access to the entire marker object, not just the name property, this means you can define and access any property inside the render function.

```js
const options = {
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { coords: [56.1304, 106.3468], labelName: 'Hello Canada' },
    { coords: [48.379433, 31.16558] },
  ],
  labels: {
    markers: {
      render(marker, index) {
        return marker.name || marker.labelName || 'Not available'
      },
    },
  },
}

const map = new jsVectorMap(options)
```

## Labels with regions

You might also want to add a label to a specific region on the map, helping to display additional information like region names, statistics, or custom descriptions.

```js
const options = {
  labels: {
    regions: {
      // The render's region receives region `code`
      render(code) {
        return ['EG', 'US', 'CH'].indexOf(code) > -1 ? code : null
      },
    },
  },
}

const map = new jsVectorMap(options)
```

## Labels offsets

You may want to adjust the space between the marker and its label by increasing or decreasing the margins.

```js
const markers = [
  { coords: [26.8206, 30.8025], offsets: [14, 10] },
  { coords: [56.1304, 106.3468], offsets: [7, -7] },
  { coords: [48.379433, 31.16558] },
]

const options = {
  labels: {
    markers: {
      // Returns something like this: [[14, 10], [7, 7], [0, 0]]
      offsets: markers.map(marker => marker.offsets || [0, 0]),

      // Alternatively, you can return a function.
      offsets(index) {
        return markers[index].offsets
      },
    },
    regions: {
      offsets: [[5, 10], [7, 12], [4, 5]],

      // Alternatively, you can return a function.
      offsets(code) {},
    },
  },
}

const map = new jsVectorMap(options)
```