---
title: 'Regions'
description: The regions is similar to markers but with some simple diffrent changes and since the regions are already displayed we don't to make any config to show it, we just need to manipulate the regions.
menu: Regions
category: config options
position: 1
---

## Region style
As we already said before in markers section, controlling the regions style is the same, add any valid `path` property to `initial`, `hover`, `selected` and `selectedHover`.

```js
const map = new jsVectorMap({ 
  regionStyle: {
    initial: {
      stroke: "#676767",
      strokeWidth: 2.5,
      fill: '#ff5566',
      fillOpacity: 1,
    },
    // Everything in initial property can be overwritten here
    hover: { fill: 'blue' },
    selected: { fill: 'red' },
    selectedHover: { fill: 'purple' }
})
```

## Region label
You may want to add a label for a specific region, here is the labels property comes in.

```js
const map = new jsVectorMap({ 
  labels: {
    regions: {
      render(code) {
        return ['EG', 'CN'].indexOf(code) > -1 ? 'Hello' + code : null
      }
    }
  }
})
```

## Region label style
To control the label style you will need to add a new property called `markerLabelStyle` to the map.

```js
const map = new jsVectorMap({ 
  markerLabelStyle: {
    initial: {
      fontFamily: 'Poppins',
      fontSize: 13,
      fontWeight: 500,
      fill: '#35373e',
    },
    // Same properties in initial object can be overwritten in hover and selected states.
    hover: {},
    selected: {},
    selectedHHover: {}
  },
})
```

## Selected regions
You may want to select some regions initially with some other styles to make them unique as we did in markers section.

**Notice**: the selection of regions is by using region code.

```js
const map = new jsVectorMap({ 
  selectedRegions: ['EG', 'US']
})
```

## Regions selectable
Choose whether the regions are selectable or not, `default` is `false`

```js
const map = new jsVectorMap({ 
  regionsSelectable: true
})
```

## Region selectable one
To allow only one region to be selected, you will need to add this property, `default` is `false`

```js
const map = new jsVectorMap({ 
  regionsSelectableOne: true
})
```

## Get selected regions
You may want to get the current selected regions to send them to the server-side for example, here is how you can do that.

```js
const map = new jsVectorMap({ })

console.log(map.getSelectedRegions()) // returns an array of region codes: ['EG', 'US', ]
```

## Clear selected regions
Finally you can remove all selected regions.

```js
const map = new jsVectorMap({ })

map.clearSelectedRegions()
```
