# Regions
The regions is very similar to markers but with some simple diffrent changes.
Since the regions are already displayed we don't to make any config to show it, we just need to manipulate the regions.


## Region label.
You may want to add a label for a specific region, here is the labels property comes in.

```js
const map = new jsVectorMap({ 
  labels: {
    regions: {
      render(code) {
        return ['EG', 'KZ', 'CN'].indexOf(code) > -1 ? 'Hello ' + code : ''
      },
    }
  }
})
```


## Selected regions.
You may want to select some regions initially with some other styles to make them unique as we did in markers section.

```js
const map = new jsVectorMap({ 
  selectedRegions: ['EG', 'US'] // Selection of regions by code.
})
```


## Control region style.
As we already say before in markers controlling the regions style will be the same.

```js
const map = new jsVectorMap({ 
  regionStyle: {
    initial: {
      stroke: "#676767",
      strokeWidth: 2.5,
      fill: '#ff5566',
      fillOpacity: 1,
    },
    hover: { /** Everything in initial property can be overwritten here */ },
    selected: { /** Everything in initial property can be overwritten here */ }
})
```


## Control label style.
To control the label style you will need to add a new property called markerLabelStyle to the map.

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
    hover: {  },
    selected: {  }
  },
})
```


## Regions selectable.
Choose whether the regions are selectable or not, default is false

```js
const map = new jsVectorMap({ 
  regionsSelectable: true
})
```


## Region selectable one.
To allow only one region to be selected, you will need to add this property, default is false

```js
const map = new jsVectorMap({ 
  regionsSelectableOne: true
})
```


## Get selected regions.
You may want to get the current selected regions to send them to the server-side for example, here is how you can do that.

```js
const map = new jsVectorMap({ /** */ })

console.log(map.getSelectedRegions()) // returns an array of region codes: ['EG', 'US', ]
```


## Clear selected markers.
Finally you can remove all selected regions.

```js
const map = new jsVectorMap({ /** */ })

map.clearSelectedRegions()
```
