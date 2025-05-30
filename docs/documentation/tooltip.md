---
title: Tooltip
metadata:
  title: Tooltip
  description: The tooltip is an interactive element that appears on hover, showing contextual information about a marker or region on the map.
---

The tooltip is an interactive element that appears on hover, showing contextual information about a marker or region on the map.

## Usage

The tooltip is enabled by default for both regions and markers, to disable it, set the `showTooltip` option to `false`.

```js
const map = new jsVectorMap({
  showTooltip: false,
})
```

### Hiding the Tooltip for Specific Elements

If you want to disable the tooltip for a specific region or marker while keeping it enabled for others you can do so by omitting the name property from that particular element.

This gives you precise control over which elements display tooltips.

```js
const options = {
  onRegionTooltipShow(event, tooltip, code) {
    // Hide for all
    event.preventDefault()

    // Or you can disable tooltip for certain regions
    if (['EG', 'US', 'GL'].indexOf(code) > -1) {
      event.preventDefault()
    }
  },
}

const map = new jsVectorMap(options)
```

### Tooltip appearance

You have full control over the tooltip's appearance including styling, content, and even injecting custom HTML elements.

Let's take a look at how to customize it.

In the following example, we'll override the default tooltip for regions and display the population when hovering over the markers.

:::Code id="tooltip/appearance"

```html [index.html]
<div id="map"></div>
```

```js [app.js]
const markers = [
  { name: 'Egypt', coords: [26.8206, 30.8025], population: '114.5 million', },
  { name: 'United Kingdom', coords: [55.3781, 3.4360], population: '68.35 million', },
  { name: 'United States', coords: [37.0902, -95.7129], population: '340.1 million' },
]

const options = {
  labels: { markers: { render: marker => marker.name } },
  markers,
  onRegionTooltipShow(event, tooltip, code) {
    const html = `
      <h5>${code}</h5>
      <p class="text-xs">Hello this is a text.</p>
    `
    tooltip.text(html, true)
  },
  onMarkerTooltipShow(event, tooltip, index) {
    const marker = markers[index]
    const html = `
      <h5>${marker.name}</h5>
      <p class="text-xs">Population: ${marker.population}</p>
    `
    tooltip.text(html, true)
  }
}

const map = new jsVectorMap(options)
```

:::

## Methods

When listening for events like `onRegionTooltipShow` and `onMarkerTooltipShow` these functions recieves a tooltip instance as the second argument, the tooltip instance provides a useful set of methods to control the tooltip element.

### getElement()

You may want to get the tooltip element to do something.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip, code) {
    const element = tooltip.getElement()

    // ...
  },
})
```

### show() & hide()

You may want to show the tooltip or hide it sometimes.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip, code) {
    if (code === 'EG') {
      tooltip.hide()
    }
  },
})
```

### text()

This method is especially useful for setting or updating the tooltip content dynamically.

You can also insert HTML by passing true as the second parameter.

```js
const map = new VectorMap({
  onRegionTooltipShow(event, tooltip, code) {
    tooltip.text(`${tooltip.text()} - plus`)
  },
})
```

### css()

You can set the tooltip style also via JavaScript.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip) {
    tooltip.css({ backgroundColor: '#F00', ... })
  },
})
```