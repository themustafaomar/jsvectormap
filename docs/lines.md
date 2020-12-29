# Lines
The lines section will provide you with all you need to know about lines.

<br>

**markers**: `Array`

**Default**: `undefined`

Register lines specifications, to get started with lines do the example below.

```js
const map = new jsVectorMap({ 
  markers: [
    { name: 'Foo', coords: [-14.2350, -51.9253] },
    { name: 'Bar', coords: [35.8617, 104.1954] }
  ]
  lines: [
    { from: 'Foo', to: 'Bar'}
  ]
})
```


## Control line style.
You may also want to control the the initial and hover styles.

Notice: each style property in initial object can be added to hover and selected objects as well.

```js
const map = new jsVectorMap({ 
  lineStyle: {
    initial: {
      stroke: "#676767",
      strokeWidth: 2.5,
      fill: '#ff5566',
      fillOpacity: 1,
    },
    hover: { /** Everything in initial property can be overwritten here */ },
    selected: { /** Everything in initial property can be overwritten here */ }
  },
})
```
