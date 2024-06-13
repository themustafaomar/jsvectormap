---
title: 'Markers'
description: Markers let you codify your topics with visual icons, shapes, or textual tags.
---

| Property      | Description    | Type          | Default       |
| :------------ | :-----------:  | :-----------: | ------------: |
| `markers`     | Adding markers | `Array`       | `[]`          |

## Getting started
<!-- Register markers specifications, to get started with markers do the example below. -->

**Notice**: If you pass a `name` property to the marker object, when a user hovers over the marker the tooltip will show and use that `name`, it's also used to connect [Lines](lines) as a unique identifier.

```js
const map = new jsVectorMap({ 
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United Kingdom', coords: [55.3781, 3.4360] },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      // Add style for this particular marker
      // Keep in mind `style` object is merged with `markerStyle.initial`
      style: {
        initial: {
          fill: 'red'
        }
      }
    }
  ]
})
```

<vector-map id="markersIntro" />

## Options

The marker options configuration.

### Selecting markers
You may want to select a set of markers initially with some styles to make them unique.

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

### Selectable
Choose whether the markers are selectable or not, default is `false`

```js
const map = new jsVectorMap({ 
  markersSelectable: true // The markers are selectable
})
```

### Selectable one
To allow only one marker to be selected, set `markersSelectableOne` to be `true`, default is `false`

```js
const map = new jsVectorMap({ 
  markersSelectableOne: true
})
```

### Circle marker
Cotrolling the marker style for `initial`, `hover`, `selected`, and `selectedHover` states.

:::info
**Notice**: Feel free to add any [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) valid property, and again each style property in `initial` object can be added to `hover`, `selected` and `selectedHover` objects as well
:::

```js
const map = new jsVectorMap({ 
  markerStyle: {
    initial: {
      stroke: '#676767',
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

### Image marker
You can add an image as a marker instead of `circle` as well.

```js
const map = new jsVectorMap({
  markerStyle: {
    initial: {
      // Add default image marker.
      // image: '/path/to/image'
    }
  },
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United States', coords: [37.0902, -95.7129] },
    {
      name: 'United Kingdom',
      coords: [55.3781, 3.4360],
      style: {
        initial: {
          image: '/images/pin.png' // Add a marker image for this particular marker.
        }
      }
    }
  ]
})
```

<vector-map id="markersImageMarker" />

### Marker label style
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

## Methods

The markers methods are a set of useful functions you can call after the map has loaded eg: add marker, remove marker etc.

### addMarkers()
You may want to add a new marker programmatically after the map has been loaded, for example add a new marker when the user clicks a button.

```js
const map = new jsVectorMap({ })

// Add one marker
map.addMarkers({ name: 'Russia', coords: [61, 105] })

// Or pass an array of markers
map.addMarkers([{
  name: 'Russia',
  coords: [61, 105]
}, {
  name: 'Egypt',
  coords: [26.8206, 30.8025],
  // Add additional style for this particular marker.
  style: {
    initial: {
      fill: 'red' 
    }
  }
}])
```

### getSelectedMarkers()
You may want to get the current selected markers to send them to the server-side for example, here is how you can do that.

```js
const map = new jsVectorMap({ })

console.log(map.getSelectedMarkers())
// returns an array of markers indexes: [0, 2, 3]
```

### clearSelectedMarkers()
You may want to clear all selected markers.

```js
const map = new jsVectorMap({ })

map.clearSelectedMarkers() // returns undefined
```

### removeMarkers()
If you want to remove certain markers or all markers entirly you can use `removeMarkers` method.

```js
const map = new jsVectorMap({ })

// Notice this method accepts an array of markers indexes you want to remove
map.removeMarkers([1, 3])

// As of v1.3.2 if you didn't pass the indexs, all markers will be removed
map.removeMarkers()
```