# Series
A map series is a compilation of maps usually having the same cartographic specifications.

<br>

**markers**: `Object`

**Default**: `undefined`

Series can have both markers and regions objects to create series.

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
Value: could be: fill, stroke for markers and regions

**scale**: `Object` | `Array`
A set of scales can be an object containing keys and values, key is the name of the scale and the value contains the color.

**values**: `Object`
The data set to visualize.


##  Example with markers.
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

<div class="map-example" data-config-uid='seriesMarkersExample' style="height: 350px"></div>

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

<div class="map-example" data-config-uid="seriesRegionsExample" style="height: 350px;"></div>
