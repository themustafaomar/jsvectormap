---
title: 'Regions'
description: This section describes how to control region style and manipulate the regions.
---

## Options
As we already said before in markers section, controlling the regions style is the same, add any valid `path` property to `initial`, `hover`, `selected` and `selectedHover`.

### Region style

Setting the region initial style.

```js
const map = new jsVectorMap({ 
  regionStyle: {
    initial: {
      fill: '#ff5566',
      stroke: "#676767",
      strokeWidth: 2.5,
      fillOpacity: 1
    }
  }
})
```

### Hover state

Setting the region style on `hover` state.

```js
const map = new jsVectorMap({ 
  regionStyle: {
    // Everything in initial property can be overwritten here
    hover: { fill: 'blue' }
  }
})
```

### Selected & Selected hover states

Setting the region style on `selected` state (when the region is selected).

```js
const map = new jsVectorMap({ 
  regionStyle: {
    selected: { fill: 'red' },
    selectedHover: { fill: 'purple' }
  },
})
```

### Selected regions

You may want to select some regions initially with some other styles to make them unique as we did in markers section.

**Notice**: the selection of regions is by using region code.

```js
const map = new jsVectorMap({ 
  selectedRegions: ['EG', 'US']
})
```

### Regions selectable

Choose whether the regions are selectable or not, `default` is `false`

```js
const map = new jsVectorMap({ 
  regionsSelectable: true
})
```

### Region selectable one

To allow only one region to be selected, you will need to add this property, `default` is `false`

```js
const map = new jsVectorMap({ 
  regionsSelectableOne: true
})
```

## Labeling regions

You may want to add a label for a specific region, here is the labels property comes in.

### Add label

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

### Design label

To control the label style you will need to add a new property called `regionLabelStyle` to the map.

```js
const map = new jsVectorMap({ 
  regionLabelStyle: {
    initial: {
      fill: '#35373e',
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: 13,
    },
    // Same properties in initial object can be overwritten in hover and selected states.
    hover: {},
    selected: {},
    selectedHover: {}
  },
})
```

## Methods

### getSelectedRegions()

You may want to get the current selected regions to send them to the server-side for example, here is how you can do that.

```js
const map = new jsVectorMap({ })

console.log(map.getSelectedRegions()) // returns an array of region codes: ['EG', 'US', ]
```

### clearSelectedRegions()

Finally you can remove all selected regions.

```js
const map = new jsVectorMap({ })

map.clearSelectedRegions()
```
