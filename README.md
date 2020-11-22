# Jsvectormap
A lightweight Javascript library for creating interactive maps and pretty data visualization.

<img src="assets/images/jsvectormap.jpg" />

First of all, this project is a deeply modified version of [jvectormap](https://github.com/bjornd/jvectormap)<br>
I created this project to help developers who aren't using jQuery in their projects.<br>

## Support
jsVectorMap supports all modern brownsers including IE9+<br>
jQuery is no longer a required dependency, the project is completely build with pure Javascript.

## Related projects
[vuevectormap](https://github.com/themustafaomar/vuevectormap) a Vue wrapper component.

## Demo
Checkout the [demo](https://3iw9b.csb.app) at codesandbox, [code](https://codesandbox.io/s/jsvectormap-3iw9b).<br>
Demo at [Codepen](https://codepen.io/themustafaomar/pen/ZEGJeZq) | [Documentation](https://themustafaomar.com/open-source/jsvectormap/docs/introduction)

## Installation
Installing via npm
```js
npm i jsvectormap
```

### OR
You can download the latest version from the Github: [Download](https://github.com/themustafaomar/jsvectormap/archive/master.zip) or clone the repository:
```
git clone https://github.com/themustafaomar/jsvectormap.git
```

## Usage
#### Manually
```html
<link rel="stylesheet" href="dist/css/jsvectormap.min.css" />
<script src="dist/js/jsvectormap.min.js"></script>
<script src="dist/maps/world.js"></script>

<div id="map"></div>

<script>
  var map = new jsVectorMap({
    selector: '#map',
    map: 'world',
  });
</script>
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

const map = new jsVectorMap({
  selector: '#map',
  map: 'world',
})
```

**Sass**
if you're using Sass you can overwite default style with Sass variables .
Take a look at [this file](https://github.com/themustafaomar/jsvectormap/blob/master/src/scss/jsvectormap.scss) to know about all possible variables.

```scss
$tooltip-bg-color: #3a3d4c;
$tooltip-font-family: Roboto, sans-serif;

@import 'jsvectormap'
```

## Contributions
Your contributions always **welcome**
1) please don't update the build files when sending pull requests, modifications should be committed within src/js/*.

## Notes
If you're good at React or Angular and you want to make a wrapper component<br>
please feel free to do it and contact me at `themustafaomar@gmail.com` to add mention your repository here.

## License
jsvectormap licensed under MIT.
