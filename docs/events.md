---
title: 'Events'
description: When a specific action occurs on a target element, e.g. region hover, marker hover, region click, etc, a handler function is executed.
menu: Events 
category: config options
position: 6
---

## Loaded
- Name: `onLoaded`
  - Params: (`map`: The map instance)
  - Description: Triggered when map is fully rendered (available since v1.1.0+)

```js
const map = new jsVectorMap({ 
  onLoaded(map) {
    // This is a great opportunity and useful use-case to handle the reszing of the window.
    window.addEventListener('resize', () => {
      map.updateSize()
    })
  }
})
```

## Viewport change
- Name: `onViewportChange`
  - Params: (`scale`, `transX`, `transY`)
  - Description: Triggered when map viewport was changed

```js
const map = new jsVectorMap({ 
  onViewportChange(scale, transX, transY) {
    // Do something
  }
})
```

## Region selected
- Name: `onRegionSelected`
  - Params: (`code`, `isSelected`, `selectedRegions`)
  - Description: Triggered when a region was selected

```js
const map = new jsVectorMap({ 
  onRegionSelected(code, isSelected, selectedRegions) {
    if (code === 'EG') {
      alert('Hello Egypt.')
    }
  }
})
```

## Marker selected
- Name: `onMarkerSelected`
  - Params: (`index`, `isSelected`, `selectedMarkers`)
  - Description: Triggered when a marker was selected

```js
const map = new jsVectorMap({ 
  onMarkerSelected(index, isSelected, selectedMarkers) {
    if (index === 0) {
      // Do something
    }
  }
})
```

## Region tooltip show
- Name: `onRegionTooltipShow`
  - Params: (`tooltip`, `code`)
  - Description: Triggered when region tooltip was shown

```js
const map = new jsVectorMap({
  onRegionTooltipShow (tooltip, index) {
    // Yes, you can use `css` and `text` methods, they're built-in for jsVectorMap not a jQuery code.
    tooltip.css({ backgroundColor: 'red' }).text(
      tooltip.text() + ' (Hello this is a modified text!)'
    )
  }
})
```

## Marker tooltip show
- Name: `onMarkerTooltipShow`
  - Params: (`tooltip`, `code`)
  - Description: Triggered when marker tooltip was shown

```js
const map = new jsVectorMap({ 
  onMarkerTooltipShow(tooltip, index) {
    tooltip.text('<h5>' + tooltip.text() + '</h5>')
  }
})
```