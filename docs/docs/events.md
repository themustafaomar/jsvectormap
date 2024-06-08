---
title: 'Events'
description: When a specific action occurs on a target element, e.g. region hover, marker hover, region click, etc, a handler function is executed.
---

| Property | Description | Params |
| :--------- | :-----------:  | :-----------: |
| `onLoaded` | Triggered when map is fully rendered (available since v1.1.0+) | [Map instance `map`]  |
| `onViewportChange` | Triggered when map viewport was changed | [`scale`, `transX`, `transY`]  |
| `onRegionClick` | Triggered when a region is clicked | [`event`, `code`]  |
| `onMarkerClick` | Triggered when a marker is clicked | [`event`, `markerIndex`]  |
| `onRegionSelected` | Triggered when a region was selected | [`code`, `isSelected`, `selectedRegions`]  |
| `onMarkerSelected` | Triggered when a marker was selected | [`index`, `isSelected`, `selectedMarkers`]  |
| `onRegionTooltipShow` | Triggered when region tooltip was shown | [`event`, `tooltip`, `index`]  |
| `onMarkerTooltipShow` | Triggered when marker tooltip was shown | [`event`, `tooltip`, `code`]  |