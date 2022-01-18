## Attention ⚠️⚠️

### The docs website is now inactive due to a problem, I'm working on a new docs and it'll be available as soon as possible, thank you for understanding and sorry for that!

#### EDIT, [temporary docs](https://jvm-docs.netlify.app/)

<br>

<p align="center">
  <a href="https://themustafaomar.com/open-source/jsvectormap">
    <img src="assets/images/jsvectormap.jpg" alt="Jsvectormap sample" width="500" />
  </a>
</p>

<h3 align="center">Jsvectormap</h3>

<p align="center">
  A lightweight Javascript library for creating interactive maps and pretty data visualization.
  <br>
  <br>
  <a href="https://themustafaomar.com/open-source/jsvectormap"><strong>Explore docs</strong></a>
  .
  <a href="https://github.com/themustafaomar/jsvectormap/issues/new"><strong>Report bug</strong></a>
  ·
  <a href="https://themustafaomar.com/open-source/jsvectormap"><strong>View demo</strong></a>
  ·
  <a href="https://github.com/themustafaomar/jsvectormap/archive/master.zip"><strong>Download</strong></a>
</p>

# Jsvectormap

Bringing data to life with interactive maps

This project is a deeply modified version of [jvectormap](https://github.com/bjornd/jvectormap) and was created to help developers who aren't using jQuery anymore in their projects.

Jsvectormap supports all modern brownsers including IE9+

<a href="https://www.npmjs.com/package/jsvectormap"><img src="https://img.shields.io/npm/l/jsvectormap.svg?sanitize=true" alt="License"></a>
<a href="https://npmcharts.com/compare/jsvectormap?minimal=true"><img src="https://img.shields.io/npm/dm/jsvectormap.svg?sanitize=true" alt="Downloads"></a>
<img src="https://img.shields.io/npm/v/jsvectormap.svg?sanitize=true" alt="Version">
<img src="https://img.shields.io/bundlephobia/min/jsvectormap" alt="Minified">
<img src="https://img.shields.io/bundlephobia/minzip/jsvectormap" alt="Minizipped">

## What's an interactive map

* Interactive map is a powerful tool for presentation.
* It give the ability to create layers of information that can be shown or hidden at the click of a button on a region or maybe a marker.
* Data can be quickly updated, and these updates made transparent to users. 
* Zoom functions that allow users to focus on either the details of a particular region, or to gain a quick overview of a wider area.

## Quick start

Installing via npm
```bash
npm i jsvectormap
```

import your preferred map you want to work with, after importing the `jsvectormap`

```js
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'

const map = new jsVectorMap({
  selector: '#map',
  map: 'world',
})
```

## Contributions
Your contributions always **welcome**

* The build files shouldn't be updated when sending pull requests

## Developing
To work on the code, you will require the following:
* this repository
* A node environment with a version prior to v15 due to [dependency constraints](https://github.com/sass/node-sass/issues/2965#issuecomment-717620196)

If you are new to Node, consider doing the following (Linux) to get started quickly:
```bash
### Install node via your preferred mechanism. Ensure the binaries are in your path

# Obtain a copy of this repository and change into the working directory
git clone https://github.com/themustafaomar/jsvectormap.git && cd jsvectormap

# Start up the live web server
npm run dev

# Make your changes and view them in your browser. By default, it will answer on port 9000
your-browser http://localhost:9000/

# Perform a build to view your changes on the samples directory
npm run-script build && npm run dev
your-browser http://localhost:9000/samples/
```

## Tips
* If you need to expose the webpack runtime (such as if you are developing inside a container), you will need to modify `webpack.config.js`
  * Set [devServer.host](https://webpack.js.org/configuration/dev-server/#devserverhost) to the IP address you wish to expose (`0.0.0.0` for all addresses)
  * Set [devServer.allowedHosts](https://webpack.js.org/configuration/dev-server/#devserverallowedhosts) or [devServer.disableHostCheck](https://webpack.js.org/configuration/dev-server/#devserverdisablehostcheck) to permit access
* When using `npm run dev`, changes made on the filesystem are immediately available on the `index.html` page. This is not the case for the samples directory.

## License
jsvectormap licensed under MIT.
