# Basic example
This section provide basic examples, to get started.

## Manually
Getting start `manually` with simple example.

```html
<link rel="stylesheet" href="dist/css/jsvectormap.min.css" />
<script src="dist/js/jsvectormap.min.js"></script>
<script src="dist/maps/world.js"></script>

<div id="map" style="width: 600px; height: 350px"></div>
```

```javascript
var map = new jsVectorMap({
  selector: "#map",
  map: "world",
});
```

## Using cli
If you're using `webpack` or something like that you'll need to import the map you want to work with after importing jsvectormap.

```javascript
@import 'jsvectormap'
@import 'jsvectormap/dist/maps/world'

const map = new jsVectorMap({
  selector: '#map',
  map: 'world',
})
```
