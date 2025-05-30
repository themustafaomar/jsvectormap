---
title: Data Series
metadata:
  title: Data Series
  description: The tooltip is an interactive element that appears on hover, showing contextual information about a marker or region on the map.
---

A series is a visual indicator used to represent data on the map by assigning colors to specific regions or markers.

## Usage

This example applies a color-coded series to markers based on their geographic grouping.

It uses the fill attribute to visually distinguish Asian and Western countries and displays a legend to explain the color codes.

Each marker is assigned to a scale value (Asian or West) using the values object.

:::Code id="series/usage"

```html [index.html]
<div id="map"></div>
```

```js [app.js]
const markers = [
  { name: 'Russia', coords: [61.524, 105.3188] },
  { name: 'Canada', coords: [56.1304, -106.3468] },
  { name: 'Greenland', coords: [71.7069, -42.6043] },
  { name: 'Egypt', coords: [26.8206, 30.8025] },
  { name: 'Brazil', coords: [-14.2350, -51.9253] },
  { name: 'China', coords: [35.8617, 104.1954] },
  { name: 'United States', coords: [37.0902, -95.7129] },
  { name: 'Norway', coords: [60.472024, 8.468946] },
  { name: 'Ukraine', coords: [48.379433, 31.16558] },
]

const series = {
  markers: [
    {
      attribute: 'fill',
      legend: {},
      scale: {
        'Asian': '#e7000b',
        'West': '#0084d1',
      },
      values: {
        0: 'West',
        1: 'Asian',
        2: 'West',
        3: 'Asian',
        4: 'West',
        5: 'Asian',
        6: 'West',
        7: 'West',
        8: 'Asian',
      },
    },
  ],
}

const map = new jsVectorMap({
  markers,
  series,
})
```

:::

## Vertical Legend

To display the legend vertically instead of the default horizontal layout, set the vertical option to true in the legend configuration:

```js
const series = {
  markers: [
    {
      ...
      legend: {
        vertical: true,
      },
      ...
    },
  ],
}
```

## Series For Markers


## Options

The series option allows you to visually differentiate markers and regions using color-coded data scales, legends, and attributes.

This is useful for creating choropleth maps or categorizing elements based on data, each series entry can target either markers or regions, and supports the following options:

**attribute**

Defines which SVG attribute should be modified for each item in the series. Common values include:

- `fill` – Changes the fill color of markers or regions.
- `stroke` – Changes the border color.

**attributes (Regions only)**

An object for directly assigning SVG attributes per region. Each key must be a region code.

```js
attributes: {
  EG: 'red', // Egypt gets a red fill
}
```

**scale**

Maps data keys to color values. This allows you to visually represent categories or ranges.

You can use any valid CSS color as the value.

```js
scale: {
  'Asian': '#e7000b',
  'West': '#0084d1',
}
```

**values**

Assigns each region or marker to a specific key from the scale. Keys must be:

- For markers: numeric indexes (starting from 0).
- For regions: region codes (e.g., 'US', 'FR').

```js
values: {
  0: 'West',   // Marker index 0 will be colored using 'West' scale
  GB: 'Asian', // Region GB will be colored using 'Asian' scale
}
```

**legend**

Controls the appearance and layout of the legend for the series.

Available options:

- title (optional): Title text displayed above the legend.
- vertical: If true, lays out the legend vertically (default is horizontal).
