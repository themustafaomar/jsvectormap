---
title: 'Lines'
description: The lines section will provide you with all you need to know about lines.
menu: Lines
category: config options
position: 3
---

## Lines object
Register lines specifications, to get started with lines do the example below.

**Notice**: lines requires `markers` to work.

- `lines`
  - Type: `Array`
  - Default: `undefined`

```js
const map = new jsVectorMap({ 
  markers: [
    { name: 'Foo', coords: [-14.2350, -51.9253] },
    { name: 'Bar', coords: [35.8617, 104.1954] }
  ],
  lines: [{
    from: 'Foo', to: 'Bar',
    style: {
      stroke: 'red',
      strokeWidth: 1.5
    }
  }]
})
```

## Add line
You may want to add a new line after the map loaded

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

map.addLine('Egypt', 'Canada')
```

## Control line style.
Control the line style, notice no `hover` or `selected` object for lines, add your style directly within `lineStyle`.

**Notice**: you can add any [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) property for example:

```js
const map = new jsVectorMap({ 
  lineStyle: {
    stroke: "#676767",
    strokeWidth: 2.5,
    fill: '#ff5566',
    fillOpacity: 1,
    strokeDasharray: '6 3 6' // OR: [6, 2, 6]
  },
})
```
