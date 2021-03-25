---
title: 'Markers'
description: Markers let you codify your topics with visual icons or textual tags. They're basically icons, shapes and keywords that add additional contextual information to your topics
menu: Markers
category: config options
position: 2
---

## Markers object
Register markers specifications, to get started with markers do the example below.

**Notice**: If you pass a `name` property to the marker object, when a user hovers over the marker the tooltip will show and use that `name`, it's also used to connect [Lines](lines).

- `markers`
  - Type: `Array`
  - Default: `undefined`

```js
const map = new jsVectorMap({ 
  markers: [
    { name: "Egypt", coords: [26.8206, 30.8025] }, // Egypt coordinates
    { name: "Canada", coords: [56.1304, 106.3468] }, // Canada coordinates
    {
      // US coordinates
      name: "United States",
      coords: [37.0902, 95.7129],
      // Add style for this marker only
      style: { fill: 'red' }
    }
  ]
})
```

## Selected markers
You may want to select some markers initially with some other styles to make them unique.

Add the `selectedMarkers` property, then you will need to add the indexes of the markers you want to select.

```js
const map = new jsVectorMap({ 
  markers: [
    { coords: [-14.2350, -51.9253] },
    { coords: [35.8617, 104.1954] }
  ],
  selectedMarkers: [0] // Select the first marker in the array
})
```

## Marker selectable
Choose whether the markers are selectable or not, default is `false`

```js
const map = new jsVectorMap({ 
  markersSelectable: true // The markers are selectable
})
```

## Marker selectable one
To allow only one marker to be selected, set `markersSelectableOne` to be `true`, default is `false`

```js
const map = new jsVectorMap({ 
  markersSelectableOne: true
})
```

## Add a marker
You may want to add a new marker after the map has been loaded, for example add a new marker when the user clicks some button.

```js
const map = new jsVectorMap({ })

map.addMarker({
  name: 'Russia',
  coords: [61, 105],

  // Add some style for this marker.
  style: { fill: 'red' }
})
```

## Get selected markers
You may want to get the current selected markers to send them to the server-side for example, here is how you can do that.

```js
const map = new jsVectorMap({ })

console.log(map.getSelectedMarkers())
// returns an array of markers indexes: [0, 2, 3]
```

## Clear selected markers
You may want to clear all selected markers.

```js
const map = new jsVectorMap({ })

map.clearSelectedMarkers()
```

## Marker style (circle)
Cotrolling the marker style for `initial`, `hover`, `selected`, and `selectedHover` states.

**Notice**: Feel free to add any [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) valid property.

**Notice**: each style property in `initial` object can be added to `hover`, `selected` and `selectedHover` objects as well

```js
const map = new jsVectorMap({ 
  markerStyle: {
    initial: {
      stroke: "#676767",
      strokeWidth: 2.5,
      fill: '#ff5566',
      fillOpacity: 1
    },
    hover: {},
    selected: {},
    selectedHover: {}
  },
})
```

## Marker style (image)
You can add an image as a marker instead of `circle` as well.

```js
const map = new jsVectorMap({
  markerStyle: {
    initial: {
      image: '/path/to/image'
    }
  }
})
```

## Marker label style
To control the label style you will need to add a new property called `markerLabelStyle` to the map.

```js
const map = new jsVectorMap({ 
  markerLabelStyle: {
    initial: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 13,
      fontWeight: 500,
      fill: '#35373e',
    },
    // You can control the hover and selected state for labels as well.
    hover: {
      fill: 'red'
    },
    selected: {
      fill: 'blue'
    }
  },
})
```