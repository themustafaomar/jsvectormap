---
title: Topics
metadata:
  title: Topics
  description: The topics section offers detailed guidance, advanced usage examples, and best practices to help developers get the most out of the library.
---

The topics section offers detailed guidance, tips and tricks, and best practices to help developers get the most out of the library.

## Tooltip text

When you hover over a region or marker, the tooltip displays text based on a specific name property:

- **Regions**: The tooltip text comes from the map's internal configuration. Each region has a name defined within the map file.

- **Markers**: The tooltip looks for a name property in the marker configuration object that you provide.

You can customize this behavior if you want to change what the tooltip displays.

```js
const markers = [
  { label: 'Egypt', coords: [26.8206, 30.8025] },
  { label: 'Canada', coords: [56.1304, -106.3468] },
  { label: 'China', coords: [35.8617, 104.1954] },
]

const options = {
  markers,
  onMarkerTooltipShow: function (event, tooltip, index) {
    tooltip.text(markers[index].label)
  },
}

const map = new jsVectorMap(options)
```

## Customizing Zoom Buttons

Starting from `v1.7.0`, you can customize the zoom buttons by passing either a CSS selector or a DOM element to the `zoomInButton` and `zoomOutButton` options.

```js
const options = {
  zoomInButton: '#zoomin',
  zoomOutButton: '#zoomout',

  // You can use an HTML element.
  zoomInButton: document.querySelector('#zoomin'),
  zoomOutButton: document.querySelector('#zoomout'),
}
```

## Styling with CSS and Sass Variables

Starting from `v1.7.0`, you can override the styles of most elements using CSS variables.

```css
--jvm-tooltip-bg-color: #FFF;
--jvm-tooltip-font-size: 16px;
--jvm-tooltip-padding: 0.5rem 0.75rem;
```

Alternatively, if you're using Sass, you can customize styles with Sass variables as well.

For a full list of available variables, check the [variables.scss](https://github.com/themustafaomar/jsvectormap/blob/main/packages/jsvectormap/src/scss/_variables.scss) file.

```scss
@import 'jsvectormap';

$tooltip-bg-color: #FFF;
$tooltip-font-size: 1px;
$tooltip-padding: 0.5rem 0.75rem;
```