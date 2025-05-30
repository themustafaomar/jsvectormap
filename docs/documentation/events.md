---
title: Events
metadata:
  title: Events
  description: When a specific action occurs on a target element, e.g. region hover, marker hover, region click, etc, a handler function is executed.
---

When a specific action occurs on a target element, e.g. region hover, marker hover, region click, etc, a handler function is executed.

## Events

Below is a list of available events you can listen for in the map.

### onLoaded()

- **Description**: Triggered when the map is fully rendered and ready, useful for initializing interactions or accessing the map instance after setup.
- **Params**: (`map`)

### onViewportChange()

- **Description**: Triggered when the map viewport changes, such as during zoom or pan actions.
- **Params**: (scale: `Number`, transX: `Number`, transY: `Number`)

### onRegionClick()

- **Description**: Triggered when a region is clicked, allowing you to handle click events for specific regions.
- **Params**: (event: [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent), code: `String`)

### onMarkerClick()

- **Description**: Triggered when a marker is clicked, enabling you to handle interactions with specific markers.
- **Params**: (event: [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent), markerIndex: `Number`)

### onRegionSelected()

- **Description**: Triggered when a region is selected, allowing you to handle the selection state of regions.
- **Params**: (code: `String`, isSelected: `Boolean`, selectedRegions: `Array`<`String`>)

### onMarkerSelected()

- **Description**: Triggered when a marker is selected, enabling you to manage the selection state of markers.
- **Params**: (index: `Number`, isSelected: `Boolean`, selectedMarkers: `Array`<`Number`>)

### onRegionTooltipShow()

- **Description**: Triggered when a region tooltip is displayed, allowing you to manage tooltip behavior for regions.
- **Params**: (event: [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent), tooltip: [Tooltip](/docs/tooltip), code: `Number`)

### onMarkerTooltipShow()

- **Description**: Triggered when a marker tooltip is displayed, enabling you to handle tooltip behavior for markers.
- **Params**: (event: [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent), tooltip: [Tooltip](/docs/tooltip), index: `String`)