---
title: Regions
metadata:
  title: Regions
  description: xxx
---

As mentioned earlier in the markers section, controlling the region styles follows the same approach:

simply add any valid path property to the `initial`, `hover`, `selected`, and `selectedHover` states.

## Usage

To set the initial style for regions, you can configure the `regionStyle` property. Here’s an example:

```js
const map = new jsVectorMap({
  regionStyle: {
    initial: {
      fill: '#ff5566',
      stroke: '#676767',
      strokeWidth: 2.5,
    },
  },
})
```

## Options

Customize the appearance and behavior of regions using the available configuration options.

### Region state customization

You can customize the region style for when a region is selected, as well as when it is hovered over while selected, here's an example:

```js
const map = new jsVectorMap({ 
  regionStyle: {
    selected: { fill: 'red' },
    selectedHover: { fill: 'purple' },
  },
})
```

### Selected Regions

You may want to pre-select certain regions with custom styles to make them stand out, similar to what we did with markers.

**Note**: Region selection is done using the region code.

```js
const map = new jsVectorMap({ 
  selectedRegions: ['EG', 'US'],
})
```

### Selectable

You can control whether regions are selectable, by default, this is set to false.

```js
const map = new jsVectorMap({ 
  regionsSelectable: true,
})
```

### Selectable One

To allow only one region to be selected at a time, enable this property, by default, it is set to false.

```js
const map = new jsVectorMap({
  regionsSelectableOne: true,
})
```

### Labels

You may want to add labels to specific regions. This can be done using the labels property.

```js
const map = new jsVectorMap({
  labels: {
    regions: {
      render(code) {
        // Custom label logic based on region code
        return ['EG', 'CN'].indexOf(code) > -1 ? 'Hello ' + code : null
      }
    }
  }
})
```

### Designing Labels

To customize the appearance of region labels, add the regionLabelStyle property to the map configuration.

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

If you need to retrieve the currently selected regions, such as for sending data to a server, you can use the `getSelectedRegions()` method:

```js
const map = new jsVectorMap({ })

// returns an array of selected region codes, e.g. ['EG', 'US']
console.log(map.getSelectedRegions())
```

### clearSelectedRegions()

You can clear all selected regions using the following method:

```js
map.clearSelectedRegions()
```