---
title: 'Map'
description: The map section will provide you with some useful methods you can use to manipulate the map
menu: Map Api
category: config options
position: 0
---

## Map options

- `map`
  - Type: `String`
  - Default: `world`
  - Description: The name of the map you want to work with (Don't forget to import the map first)

- `backgroundColor`
  - Type: `String`
  - Default: `transparent`
  - Description: The map's container background color

- `draggable`
  - Type: `Boolean`
  - Default: `true`
  - Description: Change the map scale when dragging

- `zoomButtons`
  - Type: `Boolean`
  - Default: `true`
  - Description: Show zoom buttons

- `zoomOnScroll`
  - Type: `Boolean`
  - Default: `true`
  - Description: Zoom the map when scolling.

- `zoomOnScrollSpeed`
  - Type: `Number`
  - Default: `3`
  - Description: The scroll speed when scrolling

- `zoomMax`
  - Type: `Number`
  - Default: `12`
  - Description: Maximum map zoom

- `zoomMin`
  - Type: `Number`
  - Default: `1`
  - Description: Minimum map zoom

- `zoomAnimate`
  - Type: `Boolean`
  - Default: `true`
  - Description: Animate when zomming the map

- `showTooltip`
  - Type: `Boolean`
  - Default: `true`
  - Description: Show tooltip when hovering over a region and marker

- `focusOn`
  - Type: `Object`
  - Default: `{}`
  - Description: Set focus on a specific region/regions

```javascript
const map = new jsVectorMap({ 
  focusOn: {
    regions: ['EG', 'SA'],
    // Or single region region: 'EG',
    animate: true
  }
})
```

## Methods:

- `setBackgroundColor`
  - Params: color `String`
  - Description: Set the map's background color.

- `setSelected`
  - Params: markers `String`, keys `Array`
  - Description: Set the map's background color.

```js
const map = new jsVectorMap({ /** ... */ })
  
map.setSelected('regions', ['EG', 'RU', 'US'])

// Set selected markers

map.setSelected('markers', [0, 2, 3])
```

- `getSelectedRegions`
  - Params: `None`
  - Description: Get the selected regions

- `clearSelectedRegions`
  - Params: `None`
  - Description: Clear the selected regions

- `getSelectedMarkers`
  - Params: `None`
  - Description: Get the selected markers

- `clearSelectedMarkers`
  - Params: code `String`, config `Object`
  - Description: Clear the selected markers

- `addMarker`
  - Params: `None`
  - Description: Add a new markers even if after the map has loaded.

```js
const map = new jsVectorMap({ /** */ })

map.addMarker({
  name: 'Russia',
  coords: [61, 105],

  // Optional label and offset.
  label: 'Russia',
  offsets: [15, 10],

  // If you want to add style
  style: { fill: 'red' }
})
```

- `reset`
  - Params: `None`
  - Description: Reset the map.