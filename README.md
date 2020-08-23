# Jsvectormap
#### A lightweight Javascript library for creating interactive maps.

<img src="assets/images/jsvectormap.jpg" />

First of all, this project is a deeply modified version of [jvectormap](https://github.com/bjornd/jvectormap)<br>
I created this project to help developers who aren't using jQuery in their projects.<br>

## Support
IE 8 dropped, and the VML is no longer supported.<br>
jQuery removed, the project is completely build with pure Javascript.

## Related projects
[vuevectormap](https://github.com/themustafaomar/vuevectormap) a Vue wrapper component.

## Demo
Checkout the [demo](https://3iw9b.csb.app) at codesandbox, [code](https://codesandbox.io/s/jsvectormap-3iw9b).<br>
Demo at [Codepen](https://codepen.io/themustafaomar/pen/ZEGJeZq)

## Installation
Installing via npm
```js
npm i jsvectormap
```

### Download
You can download the latest version from the Github: [Download](https://github.com/themustafaomar/jsvectormap/archive/master.zip)

or clone the repository:
```
git clone https://github.com/themustafaomar/jsvectormap.git
```

## Usage
#### Manually
```html
<html>
  <head>
    <title>JsVectorMap</title>
    <link rel="stylesheet" href="dist/css/jsvectormap.min.css" />
    <script src="dist/js/jsvectormap.min.js"></script>
    <script src="dist/maps/world.js"></script>
  </head>
  <body>
    <div id="map" style="width: 800px; height: 450px"></div>
    <script>
      var map = new JsVectorMap({
        selector: '#map',
        map: 'world'
      });
    </script>
  </body>
</html>
```

#### Using CDN links
```html
<script src="https://unpkg.com/jsvectormap"></script>
<script src="https://unpkg.com/jsvectormap/dist/maps/world.js"></script>
```
#### CLI
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

Show tooltip when hovering over a region and marker

**setFocus** *`object`* version >= 1.0.5

Set focus on a specific region/regions

### Markers & Regions options
**markers/regionsSelectable** *'false'*

The marker is selectable

**marker/regionSelectableOne**

Allow only one marker to be selected

**marker/regionStyle** *'object'*

Let's see an example instead, since the options is so clear.

```js
'marker/regionStyle': {
  initial: {
    r: 8, // Marker/region width
    fill: 'black', // Marker/region color
    fillOpacity: 1, // The opacity of the marker/region shape
    stroke: '#FFF', // Stroke
    strokeWidth: 6, // the stroke width
    strokeOpacity: .65, // The stroke opacity
  },
  // All options in initial object can be overitten
  // in hover, selected, selectedHover object as well.
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

### Don't forget to see samples folder it has important tips.

## Events
| Name  | Description  | Params  |
| :------------ | :------------ | :------------ |
| `onLoaded` | Triggered when map is fully rendered (available since v1.1.0+) | a map instance |
| `onViewportChange` | Triggered when map viewport was changed | scale - transX - transY |
| `onRegionSelected` | Triggered when a region was selected | index, isSelected, selectedRegions |
| `onMarkerSelected` | Triggered when a marker was selected | code, isSelected, selectedMarkers |
| `onRegionTooltipShow` | Triggered when region tooltip was shown | tooltip, code |
| `onMarkerTooltipShow` | Triggered when marker tooltip was shown | tooltip, code |

## Contributions
Your contributions always **welcome**
Note: please don't update the build files when sending pull requests, modifications should be committed within src/js/*.

## Notes
If you're good at React or Angular and you want to make a wrapper component<br>
please feel free to do it and contact me at `themustafaomar@gmail.com` to add mention your repository here.

## License
jsvectormap licensed under MIT.
