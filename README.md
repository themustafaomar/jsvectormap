# A lightweight Javascript library for creating interactive maps

<img src="assets/images/jsvectormap.jpg" />

# Jsvectormap
First of all this project is modified version of [jvectormap](https://github.com/bjornd/jvectormap)<br>
I created this project to help developers who aren't using jQuery in their projects.<br>

**The changes have been done**<br>

IE 8 has been dropped.<br>
The VML is no longer supported.<br>
jQuery removed the project is pure Javascript.

## Demo

Checkout here [https://3iw9b.csb.app](https://3iw9b.csb.app)<br>
Code in [codesandbox](https://codesandbox.io/s/charming-cdn-3iw9b)

## Installation
Installing with npm is recommended.

```js
npm i jsvectormap
```
### Download

You can download the latest version from the Github: [Download](https://github.com/themustafaomar/jsvectormap/archive/master.zip)

## Quick start

```html
<link rel="stylesheet" href="dist/css/jsvectormap.min.css" />
<script src="dist/js/jsvectormap.min.js"></script>
<script src="dist/maps/world.js"></script>

<script>
var map = new JsVectorMap({
  // Or Element example: document.querySelector('#map')
  selector: '#map',
  map: 'world'
});
</script>
```

If you're using webpack or something like that you'll need to import the map you want to work with after importing the library.
```js
@import 'jsvectormap'
@import 'jsvectormap/dist/maps/world.js'

const map = new JsVectorMap({
  selector: '#map',
  map: 'world',
})
```
**Sass**
```scss
@import 'jsvectormap'
```

## Options

**map** *'world'*

**mapBgColor** *'transparent'*

The map's container background color

**draggable** *'true'*

Change the map scale when dragging

**zoomButtons** *'true'*

Show zoom buttons

**zoomOnScroll** *'true'*

Zoom the map when scolling.

**zoomOnScrollSpeed** *'3'*

The scroll speed when scrolling

**zoomMax** *'12'*

Maximum map zoom

**zoomMin** *'1'*

Minimum map zoom

**zoomAnimate** *'true'*

Animate when zomming the map

**showTooltip** *'true'*

Show tooltip

#### Markers options

**markersSelectable** *'false'*

The marker is selectable

**markerStyle** *'object'*

Let's see an example instead, since the options is so clear.

```js
markerStyle: {
  initial: {
    r: 8, // Marker width
    fill: 'black', // Marker color
    fillOpacity: 1, // The opacity of the marker shape
    stroke: '#FFF', // Stroke
    strokeWidth: 6, // the stroke width
    strokeOpacity: .65, // The stroke opacity
  },
  // All options in initial object can be overitten in hover, selected, selectedHover object as well.
  hover: {
    stroke: 'black',
    cursor: 'pointer',
    strokeWidth: 2,
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
    fill: 'red'
  }
},
```

**regionStyle** *'object'*

The same as markerStyle there's no diffrence.

### Don't forget to see samples folder it has important tips.

## Events

| Name  | Description  | Params  |
| :------------ | :------------ | :------------ |
| `onViewportChange` | Triggered when map viewport was changed  | scale - transX - transY  |
| `onRegionSelected`  | Triggered when a region was selected  | index, isSelected, selectedRegions |
| `onMarkerSelected`  | Triggered when a marker was selected | code, isSelected, selectedMarkers |
| `onRegionTooltipShow` | Triggered when region tooltip was shown | tooltip, code |
| `onMarkerTooltipShow` | Triggered when marker tooltip was shown | tooltip, code |

## Contributions

Your contributions always **welcome**

## License

jsvectormap licensed under MIT.
