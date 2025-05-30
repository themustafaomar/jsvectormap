---
title: Markers
metadata:
  title: Markers
  description: The Marker component allows you to add customizable markers to your map at specific coordinates.
---

Markers provide a visual way to represent your data using icons, shapes, or labels.

They're ideal for pinpointing locations, tagging important areas, or drawing attention to specific elements on the map.

## Usage

**Note**: When you assign a name property to a marker, it will appear in the tooltip on hover, providing additional context for users.

This name also acts as a unique identifier, allowing you to connect markers with lines.

For more details, see the [Lines](/docs/lines) section.

:::Code id="markers/usage"

```html [index.html]
<div id="map"></div>
```

```js [app.ts]
import jsVectorMap from 'jsvectormap'

const options = {
  labels: {
    markers: { render: marker => marker.name }
  },
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United Kingdom', coords: [55.3781, 3.4360] },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      style: { fill: 'red' },
    },
  ],
}

const map = new jsVectorMap(options)
```

:::

## Options

Customize the appearance and behavior of markers using the available configuration options.

### Selecting markers

You can pre-select specific markers by applying custom styles to make them stand out.

To do this, use the `selectedMarkers` property and pass an array of marker indexes you want to highlight.

```js
const map = new jsVectorMap({ 
  markers: [
    { coords: [-14.2350, -51.9253] },
    { coords: [35.8617, 104.1954] },
  ],
  selectedMarkers: [0], // Select the first marker in the array
})
```

### Selectable

Enables or disables marker selection, set to true to allow users to select markers, by default, this option is set to false.

```js
const map = new jsVectorMap({ 
  markersSelectable: true,
})
```

### Selectable one

To restrict selection to a single marker at a time, enable the following option that limits selection to one, by default, multiple markers can be selected.

```js
const map = new jsVectorMap({ 
  markersSelectableOne: true,
})
```

### Appearance

Customize the appearance of circle markers across different states: `initial`, `hover`, `selected`, and `selectedHover`.

**Note**: You can use any valid SVG [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) property, additionally, any style defined in the initial object can also be applied to the `hover`, `selected`, and `selectedHover` states.

```js
const options = { 
  markerStyle: {
    initial: { stroke: '#676767' },
    hover: { stroke: '#fff' },
    selected: { strokeWidth: 2.5 },
    selectedHover: { fillOpacity: 1 },
  },
}

const map = new jsVectorMap(options)
```

### Image Marker

You can replace the default circle with an image to customize your marker's appearance.

:::Code id="markers/image"

```html [index.html]
<div id="map"></div>
```

```js [app.ts]
import jsVectorMap from 'jsvectormap'

const options = {
  markerStyle: {
    initial: { image: '/pin.png' },
  },
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    {
      name: 'United Kingdom',
      coords: [55.3781, 3.4360],
      // Add a marker image for this particular marker.
      style: { image: '/pin.png' },
    },
  ],
}

const map = new jsVectorMap(options)
```

:::

<!-- ```js
const map = new jsVectorMap({
  markerStyle: {
    initial: { image: '/path/to/image' },
  },
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    {
      name: 'United Kingdom',
      coords: [55.3781, 3.4360],
      // Add a marker image for this particular marker.
      style: { image: '/images/pin.png' },
    },
  ],
})
``` -->

### Marker Label Style

To customize the style of the marker label, add a new property called markerLabelStyle to the map.

```js
const options = { 
  markerLabelStyle: {
    initial: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      ...
    },
    // You can control the hover and selected state for labels as well.
    hover: { fill: 'red' },
    selected: { fill: 'blue' },
  },
}

const map = new jsVectorMap(options)
```

## Methods

The marker methods provide a collection of useful functions that you can call once the map has loaded, such as adding or removing markers, and more.

### addMarkers()

You can add new markers programmatically after the map has loaded.

For example, you might want to add a marker when the user clicks a button.

```js
const map = new jsVectorMap({ })

// Add one marker
map.addMarkers({ name: 'Russia', coords: [61, 105] })

// Or pass an array of markers
map.addMarkers([
  { name: 'Russia', coords: [61, 105] },
  {
    name: 'Egypt',
    coords: [26.8206, 30.8025],
    // Add additional style for this particular marker.
    style: { initial: { fill: 'red' } },
  },
])
```

### getSelectedMarkers()

You may need to retrieve the currently selected markers, for instance, to send them to the server, here's how you can do that:

```js
const map = new jsVectorMap({ })

console.log(map.getSelectedMarkers())
// returns an array of selected marker indexes: [0, 2, 3]
```

### setSelectedMarkers()

Introduced in `v1.7.0`, this method allows you to programmatically set selected markers after the map has been initialized.

Useful for dynamically updating marker selection based on user interaction or external data.

```js
const map = new jsVectorMap({ })

map.setSelectedMarkers([1, 6])
```

### clearSelectedMarkers()

If you want to clear all selected markers, you can use the `clearSelectedMarkers()` method:

```js
const map = new jsVectorMap({ })

map.clearSelectedMarkers() // returns undefined
```

### removeMarkers()

To remove specific markers or all markers, use the `removeMarkers()` method:

```js
const map = new jsVectorMap({ })

// Remove markers at index 1 and 3
map.removeMarkers([1, 3])

// As of v1.3.2, if no indexes are passed, all markers will be removed
map.removeMarkers()
```
