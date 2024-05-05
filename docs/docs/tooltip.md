---
title: 'Tooltip'
description: Tooltip is an element in which, when hovering over a marker or region element or component, a text box displays information about that element.
---

## Options
The tooltip element is enabled by default for both the regions and markers and you can disable it by setting `showTooltip` to `false`.

```js
const map = new jsVectorMap({ 
  ...
  showTooltip: false,
  ...
})
```

### Hide tooltip for a particular element
You may want to hide the tooltip element for a specific region or marker, or even disable it for all elements except for one or more elements.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip, code) {
    // Hide for all
    event.preventDefault()

    // Or you can disable tooltip for certain regions
    if (['EG', 'US', 'GL'].indexOf(code) > -1) {
      event.preventDefault()
    }

    // Or enable certain regions
    if (['EG', 'RU'].indexOf(code) < 0) {
      event.preventDefault()
    }
  }
})
```

### Tooltip appearance

You can literally control everything in the tooltip appearance or even adding HTML elements inside, let's take a look.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip, code) {
    tooltip.text(
      `<h5>${tooltip.text()} - Country</h5>` +
      `<p class="text-xs">This message is gonna appear when hovering over every single region.</p>`,
      true // Enables HTML
    )
  }
})
```

<vector-map id="tooltipAppearance" />

## Methods
When listening for events like `onRegionTooltipShow` and `onMarkerTooltipShow` these functions recieves a tooltip instance as the second argument, the tooltip instance provides a useful set of methods to control the tooltip element.

### getElement()
You may want to get the tooltip element to do something.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip) {
    const element = tooltip.getElement()

    // ...
  }
})
```

### show() & hide()
You may want to show the tooltip or hide it sometimes.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip) {
    if (true) {
      tooltip.hide()
    } else {
      tooltip.show()
    }
  }
})
```

### text()
This method is very usfull as we've just seen, you can set the tooltip content or even add HTML elements by passing a second parameter as `true`.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip) {
    tooltip.text(`${tooltip.text()} - plus`)
  }
})
```

### css()
You can set the tooltip style also via JavaScript.

```js
const map = new jsVectorMap({
  onRegionTooltipShow(event, tooltip) {
    tooltip.css({ backgroundColor: '#F00', ... })
  }
})
```
