---
title: 'Series'
description: A map series is a group of topographic or thematic maps or charts usually having the same scale and cartographic specifications,
menu: Data series
category: config options
position: 5
---

- Name: `series`
  - Type: `Object`
  - Default `undefined`
  - Description: Series can have both markers and regions objects to create series.

```js
const map = new jsVectorMap({ 
  series: {
    markers: [
      // You can add one or more objects to create series for markers.
    ]
    regions: [
      // You can add one or more objects to create series for regions.
    ]
  }
})
```

## Options
Let's assume we're inside an object within the markers or regions array, the available keys to create the series as below.

**attribute**: `String`

Value: could be `fill`, `stroke` for markers and regions

**attributes**: `Object`

Value: A set of initial style attributes and values

**scale**: `Object`

A set of object of scales containing keys and values, key is the name of the scale and the value contains the scale color.

**values**: `Object`

The data set to visualize.

## Example with markers.
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

<map-sample name="series-with-markers" config='{
  "series":{
    "markers":[{
      "attribute":"fill",
      "legend":{
        "title":"Some title"},
        "scale":{"mScale1":"#ffc371","mScale2":"#ff5f6d"},
        "values":{"0":"mScale1","1":"mScale2","2":"mScale2"}
      }
    ]},
    "markers":[
      {"coords":[61,105]},
      {"coords":[72,-42]},
      {"coords":[56,-106]},
      {"coords":[31.5,34.8]},
      {"coords":[-14.235,-51.9253]},
      {"coords":[35.8617,104.1954]}
    ]
  }'>
</map-sample>

## Example with regions:

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

<map-sample name="series-with-regions" config='{
  "series":{
  "regions":[{
      "attribute":"fill",
      "legend":{
        "title":"Some title"
      },
      "scale":{"My scale 1":"#ffc371","My scale 2":"#c79efd","My scale 3":"#08d191"},
      "values":{"CN":"My scale 1","MX":"My scale 2","LY":"My scale 2","RU":"My scale 3"}
    }]
  }
}'>
</map-sample>