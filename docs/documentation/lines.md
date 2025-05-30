---
title: Lines
metadata:
  title: Lines
  description: Lines are used to visually connect two or more markers on the map, making it easy to represent relationships, paths, or routes between locations.
---

Lines allow you to visually connect two or more markers on the map, representing paths, routes, or relationships between locations.

They are fully customizable, supporting different styles for color, width, opacity giving you flexibility to match your map's design and needs.

## Usage

The example below shows how to set them up easily.

**Note**: Lines require markers to be present, as they connect two or more marker points on the map.

:::Code id="lines/usage"

```html [index.html]
<div id="map"></div>
```

```js [app.js]
const options = {
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United Kingdom', coords: [55.3781, 3.4360] },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      style: { fill: 'red' }
    },
  ],
  lines: [
    { from: 'Egypt', to: 'United Kingdom' },
    { from: 'United Kingdom', to: 'United States', style: { stroke: 'grey' } }
  ],
}

const map = new jsVectorMap(options)
```

:::

You can animate lines between markers to create smooth transitions and effects, enhancing the user experience.

This feature is perfect for visualizing dynamic data or showing connections between points in an engaging way.

:::Code id="lines/animate"

```html [index.html]
<div id="map"></div>
```

```js [app.js]
const options = {
  markers: [
    { name: "Russia", coords: [61.524, 105.3188] },
    { name: "Greenland", coords: [71.7069, -42.6043] },
    { name: "Egypt", coords: [26.8206, 30.8025], style: { initial: { fill: 'red' } } },
    { name: 'Brazil', coords: [-14.2350, -51.9253], style: { initial: { fill: 'red' } } },
    { name: 'China', coords: [35.8617, 104.1954], style: { initial: { fill: 'red' } } },
    { name: 'United States', coords: [37.0902, -95.7129] },
    { name: 'Ukraine', coords: [48.379433, 31.16558], style: { initial: { fill: 'red' } } },
  ],
  lines: [
    { from: 'Russia', to: 'Greenland' },
    { from: 'Russia', to: 'United States' },
    { from: 'Brazil', to: 'Ukraine' },
    { from: 'Brazil', to: 'Egypt' },
    { from: 'Brazil', to: 'China' },
  ],
  lineStyle: {
    strokeDasharray: '6 3 6',
    animation: true,
  },
}

const map = new jsVectorMap(options)
```
:::

## Curvature (v1.7.0+)

Starting from `v1.7.0+`, you can make lines curved by setting the `curvature` option inside `lineStyle` configuration.

**Note**: This option accepts a positive or negative number to control the direction and amount of the curve.

:::Code id="lines/curvature"

```html [index.html]
<div id="map"></div>
```

```diff [app.js]
const options = {
  ...
  lineStyle: {
    strokeDasharray: '6 3 6',
    animation: true,
+    curvature: -0.5,
  },
}

const map = new jsVectorMap(options)
```
:::

## Options

Easily customize labels for markers and regions with flexible options.

Control their content, style, and position to create a clearer and more interactive map experience.

<!-- ### Line style

Control the line style, notice no `hover` or `selected` object for lines, add your style directly within `lineStyle`.

**Notice**: you can add any valid [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) property for example: -->

### Line Style

Customize the appearance of lines directly through the `lineStyle` option.

Unlike markers and regions, lines don't have hover or selected states-simply add your styles inside `lineStyle`.

**Note**: You can use any valid SVG line properties, such as:

```js
const map = new jsVectorMap({ 
  lineStyle: {
    stroke: "#676767",
    strokeWidth: 1.5,
    fill: '#ff5566',
    fillOpacity: 1,
    strokeDasharray: '6 3 6', // OR: [6, 2, 6]
    animation: true // Enables animation
  },
})
```

## Methods

Lines methods provide convenient functions to dynamically manage connections between markers after the map has been initialized.

### addLines()

Add new lines dynamically after the map has been loaded.

**Note**: The `addLine` method is deprecated, use `addLines` instead for consistency.

```js
const map = new jsVectorMap({
  markers: [
    { name: 'Canada', coords: [56.1304, -106.3468] },
    { name: 'Egypt', coords: [26.8, 30.8] },
    { name: 'Palestine', coords: [31.9522, 35.2332] },
  ],
})

// Avoid this in the future versions.
map.addLine('Egypt', 'Canada')

// Use `addLines` method to add a line or multiple lines.
map.addLines({ from: 'Palestine', to: 'Canada' })

// Add multiple lines.
map.addLines([
  { from: 'Palestine', to: 'Canada' },
  { from: 'Egypt', to: 'Canada' },
])
```

### removeLines()

Use this method to remove lines after the map has loaded.

**Note**: The removeLine method is deprecated for consistency, please use removeLines instead.

```js
// Be sure the `names` are valid, example:
const map = new jsVectorMap({
  markers: [
    { name: 'Canada', coords: [56.1304, -106.3468] },
    { name: 'Egypt', coords: [26.8, 30.8] },
  ],
})

// Avoid this in the future versions.
map.addLine('Egypt', 'Canada')

// Remove lines
map.removeLines()

// Remove a specific line
map.removeLines([{ from: 'United States', to: 'Egypt' }])
```