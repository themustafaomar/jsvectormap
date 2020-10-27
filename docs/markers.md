# Markers
The markers section will provide you with all you need to know about markers.

<br>

**markers**: `Array`

**Default**: `undefined`

Register markers specifications, to get started with markers do the example below.

```js
const map = new jsVectorMap({ 
  markers: [
    { coords: [-14.2350, -51.9253] },
    { coords: [35.8617, 104.1954] }
  ]
})
```


## Selected markers.
You may want to select some markers initially with some other styles to make them unique.

Add the selectedMarkers property to your map then you will need to add the indexes of the markers you want to select.

```js
const map = new jsVectorMap({ 
  markers: [
    { coords: [-14.2350, -51.9253] },
    { coords: [35.8617, 104.1954] }
  ],
  selectedMarkers: [0] // Select the first marker in the array
})
```
To control the style of selected markers you need to add a new property called markerStyle

```js
const map = new jsVectorMap({ 
  markerStyle: {
    selected: {
      fill: '#ff9251',
      stroke: "#676767",
      strokeWidth: 2.5,
      fillOpacity: 1,
    },
  },
})
```


## Control marker style.
You may also want to control the the initial and hover styles.

Notice: each style property in initial object can be added to hover and selected objects as well.

```js
const map = new jsVectorMap({ 
  markerStyle: {
    initial: {
      stroke: "#676767",
      strokeWidth: 2.5,
      fill: '#ff5566',
      fillOpacity: 1,
    },
    hover: { /** Everything in initial property can be overwritten here */ },
    selected: { /** Everything in initial property can be overwritten here */ }
  },
})
```


## Control label style.
To control the label style you will need to add a new property called markerLabelStyle to the map.

```js
const map = new jsVectorMap({ 
  markerLabelStyle: {
    initial: {
      fontFamily: 'Poppins',
      fontSize: 13,
      fontWeight: 500,
      fill: '#35373e',
    },
    // Yes, you can control the hover and selected state for labels as well.
    hover: {  },
    selected: {  }
  },
})
```


## Marker selectable.
Choose whether the markers are selectable or not, default is false

```js
const map = new jsVectorMap({ 
  markersSelectable: true // The markers are selectable
})
```


## Marker selectable one.
To allow only one marker to be selected, you will need to add this property, default is false

```js
const map = new jsVectorMap({ 
  markersSelectableOne: true
})
```


## Add a marker.
You may want to add a new marker after the map has been loaded, for example add a new marker when the user clicks some button.

```js
const map = new jsVectorMap({ /** */ })

map.addMarker('RU', {
  name: 'Russia',
  coords: [61, 105],

  // Optional label and offset.
  label: 'Russia',
  offset: [15, 10]
})
```


## Get selected markers.
You may want to get the current selected markers to send them to the server-side for example, here is how you can do that.

```js
const map = new jsVectorMap({ /** */ })

console.log(map.getSelectedMarkers()) // returns an array of markers indexes: [0, 2, 3]
```


## Clear selected markers.
You may want to clear all selected markers.

```js
const map = new jsVectorMap({ /** */ })

map.clearSelectedMarkers()
```
