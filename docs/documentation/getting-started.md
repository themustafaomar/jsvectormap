---
title: Getting Started
metadata:
  title: Getting Started
  description: Jsvectormap is a lightweight JavaScript library for creating interactive maps and pretty data visualization..
---

A lightweight JavaScript library for creating interactive maps and dynamic data visualizations.

This project is a highly modified version of [jvectormap](https://github.com/bjornd/jvectormap) and was created to help developers who no longer use jQuery in their projects.

With jsvectormap, you can easily embed interactive maps into your web applications, connect data to regions and markers, and customize their appearance with ease.

Here is a quick demo:

:::Code id="map/get-started"

```html [index.html]
<div id="map"></div>
```

```js [main.js]
const markers = [
  { name: "Russia", coords: [61.524, 105.3188] },
  { name: "Canada", coords: [56.1304, -106.3468] },
  { name: "Greenland", coords: [71.7069, -42.6043] },
  { name: 'Brazil', coords: [-14.2350, -51.9253], style: { initial: { fill: 'red' } } },
  { name: 'China', coords: [35.8617, 104.1954], style: { initial: { fill: 'red' } } },
  { name: 'United States', coords: [37.0902, -95.7129] },
  { name: 'Norway', coords: [60.472024, 8.468946], style: { initial: { fill: 'red' } } },
  { name: 'Palestine', coords: [31.9522, 35.2332], style: { initial: { fill: 'red' } } },
]

const options = {
  markers,
  lines: [
    { from: 'Russia', to: 'Greenland' },
    { from: 'Russia', to: 'United States' },
    { from: 'Russia', to: 'Canada' },
    { from: 'Brazil', to: 'Norway' },
    { from: 'Brazil', to: 'Palestine' },
    { from: 'Brazil', to: 'China' },
  ],
  markerStyle: {
    initial: { fill: "#3b82f6" },
    selected: { fill: "#ff5050" },
  },
  markerLabelStyle: {
    initial: {
      fontFamily: "`Sego UI`, sans-serif",
      fontSize: 13,
    },
  },
  lineStyle: {
    strokeDasharray: '6 3 6',
    animation: true,
    curvature: -0.5,
  },
}

const map = new jsVectorMap(options)
```

:::

## Interactive Maps

An interactive map is a powerful tool for data visualization and presentation, here are some key features:

**Layered Information**: Interactive maps allow for multiple layers of information that users can toggle on and off with a click, for example, show or hide regions, markers, or data overlays based on user interaction.

**Real-Time Data Updates**: Data can be updated dynamically and transparently, providing users with real-time information without reloading the map.

**Zooming and Panning**: Users can zoom into specific regions for more detailed information or zoom out for an overview, making it easy to focus on specific areas.

## Licence

The `jsvectormap` library is released under the permissive MIT License.

This means you have the freedom to use, modify, and distribute the framework in your projects, with minimal restrictions. Check out the LICENSE file for more details.
