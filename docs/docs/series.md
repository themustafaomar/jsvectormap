---
title: 'Series'
description: A map series is a group of topographic or thematic maps or charts usually having the same scale and cartographic specifications,
---

| Property | Description | Type | Default |
| :------------ | :-----------:  | :-----------: | ------------: |
| `series` | Series can be configured for `markers` and `regions` | `Object` | `undefined` |

```js
const map = new jsVectorMap({ 
  ...
  series: {
    // You can add one or more objects to create series for markers.
    markers: [],

    // You can add one or more objects to create series for regions.
    regions: [],
  },
  ...
})
```

## Options
Let's assume we're inside an object within the `markers` or `regions` array, the available keys to create the series as below.

**attribute**: `String`

Value: could be `fill`, `stroke` for markers and regions

**attributes**: `Object`

Value: A set of initial style attributes and values

**scale**: `Object`

A set of object of scales containing keys and values, key is the name of the scale and the value contains the scale color.

**values**: `Object`

The data set to visualize.

## Markers.
In this example we're going to demonstrate how the series work with markers.

```js
const map = new jsVectorMap({
  // Notice: you should declare a list of markers to apply series configuration.
  markers = [
    { coords: [61, 105] },
    { coords: [72, -42] },
    { coords: [56, -106] },
    { coords: [31.5, 34.8] },
    { coords: [-14.2350, -51.9253] },
    { coords: [35.8617, 104.1954] }
  ],
  series: {
    markers: [{
      attribute: "fill",
      legend: {
        title: "Something (marker)",
      },
      scale: {
        "mScale1": "#ffc371",
        "mScale2": "#c79efd",
      },
      values: {
        // Notice: the key must be a number of the marker.
        0: "mScale1",
        1: "mScale2",
        2: "mScale2"
      }
    }]
  }
})
```

<vector-map id="seriesMarkers" />

## Regions:

```js
const map = new jsVectorMap({
  series: {
    regions: [{
      attribute: "fill",
      legend: {
        title: "Some title",
      },
      scale: {
        myScaleOne: "#c79efd",
        myScaleTwo: "#ffc371",
        myScaleThree: "#08d191",
      },
      values: {
        // But when dealing with regions's series you should specify the region key.
        CN: "myScaleTwo",
        MX: "myScaleOne",
        LY: "myScaleOne",
        RU: "myScaleThree",
      }
    }]
  }
})
```

<vector-map id="seriesRegions" />