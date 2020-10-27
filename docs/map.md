# Map api
The map section will provide you with some useful methods you can use it.

## Map options

<br>

**map**: `String`

**Default**: `'world'`

The name of the map you want to work with (Don't forget to import the map first)

<br>

**backgroundColor**: `String`

**Default**: `'transparent'`

The map's container background color

<br>

**draggable**: `Boolean`

**Default**: `'true'`

Change the map scale when dragging

<br>

**zoomButtons**: `Boolean`

**Default**: `'true'`

Show zoom buttons

<br>

**zoomOnScroll**: `Boolean`

**Default**: `'true'`

Zoom the map when scolling.

<br>

**zoomOnScrollSpeed**: `Number`

**Default**: '3'

The scroll speed when scrolling

<br>

**zoomMax**: `Number`

**Default**: `'12'`

Maximum map zoom

<br>

**zoomMin**: `Number`

**Default**: `'1'`

Minimum map zoom

<br>

**zoomAnimate**: `Boolean`

**Default**: `'true'`

Animate when zomming the map

<br>

**showTooltip**: `Boolean`

**Default**: `'true'`

Show tooltip when hovering over a region and marker

<br>

**focusOn**: `Object`

**Default**: `'{}'`

Set focus on a specific region/regions
```javascript
const map = new jsVectorMap({ 
  focusOn: {
    regions: ['EG', 'SA'],
    // Or single region region: 'EG',
    animate: true
  }
})
```
<br>

## Map methods:

**Name**: `setBackgroundColor()`

**Arguments**: color: `String`

Set the map's background color.

<br>

**Name**: `setSelected()`

**Arguments**: type: markers | regions, keys: `Array`

```js
const map = new jsVectorMap({ /** ... */ })
  
map.setSelected('regions', ['EG', 'RU', 'US'])

// Set selected markers

map.setSelected('markers', [0, 2, 3])
```
<br>

**Name**: `getSelectedRegions()`

**Arguments**: `None`

Get the selected regions

<br>

**Name**: `clearSelectedRegions()`

**Arguments**: `None`

Clear the selected regions

<br>

**Name**: `getSelectedMarkers()`

**Arguments**: `None`

Get the selected markers

<br>

**Name**: `clearSelectedMarkers()`

**Arguments**: `None`

Clear the selected markers

<br>

**Name**: `addMarker()`

**Arguments**: code: `String`, config: `Object`

Add a new markers even if after the map has loaded.

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
<br>

**Name**: `reset()`

**Arguments**: `None`

Reset the map.
