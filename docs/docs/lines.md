---
title: 'Lines'
description: The lines are used to connect two or more markers with each other.
---

| Property      | Description    | Type          | Default       |
| :------------ | :-----------:  | :-----------: | ------------: |
| `lines`       | Adding lines between markers   | `Array`       | `[]`          |

## Getting started
Register lines specifications, to get started using lines you can implement the example below.

**Notice**: lines requires `markers` to work.

```js
const map = new jsVectorMap({ 
  markers: [
    { name: 'Foo', coords: [-14.2350, -51.9253] },
    { name: 'Bar', coords: [35.8617, 104.1954] }
  ],
  lines: [{
    from: 'Foo',
    to: 'Bar',
    style: {
      stroke: 'red',
    }
  }]
})
```

<vector-map id="linesIntro" />

## Configuration

### Line style
Control the line style, notice no `hover` or `selected` object for lines, add your style directly within `lineStyle`.

:::info
Notice: you can add any valid [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) property for example:
:::

```js
const map = new jsVectorMap({ 
  lineStyle: {
    stroke: "#676767",
    strokeWidth: 1.5,
    fill: '#ff5566',
    fillOpacity: 1,
    strokeDasharray: '6 3 6', // OR: [6, 2, 6]
    animation: true // Enables animation
  },
})
```

<vector-map id="linesStyle" />

## Methods
The lines methods are a set of useful functions you can call after the map has loaded to add connection between the markers with lines.

### addLines()
You may want to add a new line after the map loaded

:::danger
The addLine method is deprecated due to convention reasons, please use addLines instead.
:::

```js
// Be sure the `names` are valid, example:
const map = new jsVectorMap({
  markers: [{
    name: 'Canada',
    coords: [56.1304, -106.3468]
  }, {
    name: 'Egypt',
    coords: [26.8, 30.8]
  }]
})

// Avoid this in the future versions.
map.addLine('Egypt', 'Canada')

// Use `addLines` method to add a line or multiple lines.
map.addLines({ from: 'Palestine', to: 'Ukraine' })

map.addLines([
  { from: 'United States', to: 'Egypt' },
  { from: 'Palestine', to: 'Ukraine' },
])
```

### removeLines()
You may want to remove a line after the map loaded

:::danger
The removeLine method is deprecated due to convention reasons, please use removeLines instead.
:::

```js
// Be sure the `names` are valid, example:
const map = new jsVectorMap({
  markers: [{
    name: 'Canada',
    coords: [56.1304, -106.3468]
  }, {
    name: 'Egypt',
    coords: [26.8, 30.8]
  }]
})

// Avoid this in the future versions.
map.addLine('Egypt', 'Canada')

// Remove lines
map.removeLines()

// Remove a specific line
map.removeLines([{ from: 'United States', to: 'Egypt' }])
```