# Events
The events sections will provide you with some useful events fired when a specific action happens.

<br>

**Name**: `onLoaded()`

**Params**: A map instance.

Triggered when map is fully rendered (available since v1.1.0+)

```js
const map = new jsVectorMap({ 
  onLoaded(map) {
    // This is a great opportunity and useful use-case to handle the reszing of the window.
    window.addEventListener('resize', () => {
      map.updateSize()
    })
  }
})
```
<br>

**Name**: `onViewportChange()`

**Params**: scale - transX - transY

Triggered when map viewport was changed

```js
const map = new jsVectorMap({ 
  onViewportChange(scale, transX, transY) {
    // Do something
  }
})
```
<br>

**Name**: `onRegionSelected()`

**Params**: code - isSelected - selectedRegions

Triggered when a region was selected

```js
const map = new jsVectorMap({ 
  onRegionSelected(code, isSelected, selectedRegions) {
    if (code === 'EG') {
      alert('Hello Egypt.')
    }
  }
})
```
<br>

**Name**: `onMarkerSelected()`

**Params**: index - isSelected - selectedMarkers

Triggered when a marker was selected

<br>

**Name**: `onRegionTooltipShow()`

**Params**: tooltip - code

Triggered when region tooltip was shown

```js
const map = new jsVectorMap({
  onRegionTooltipShow (tooltip, index) {
    // Yes, you can use `css` and `text` methods, they're built-in for jsVectorMap not a jQuery code.
    tooltip.css({ backgroundColor: 'red' }).text(
      tooltip.text() + ' (Hello this is a modified text!)'
    )
  }
})
```
<br>

**Name**: `onMarkerTooltipShow()`

**Params**: tooltip, code

Triggered when marker tooltip was shown

```js
const map = new jsVectorMap({ 
  onMarkerTooltipShow(tooltip, index) {
    tooltip.text('<h5>' + tooltip.text() + '</h5>')
  }
})
```
