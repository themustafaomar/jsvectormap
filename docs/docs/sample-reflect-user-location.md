---
title: 'Reflect user location'
description: This section shows an example of how to reflect the client location on the map using markers.
---

<ReflectUserLocation></ReflectUserLocation>

```js
const map = new jsVectorMap({
  ...
  onLoaded(map) {
    const button = document.querySelector('#request-location')

    button.addEventListener('click', () => {
      navigator.geolocation.getCurrentPosition((position) => {
        map.instance.addMarkers({
          coords: [position.coords.latitude, position.coords.longitude]
        })
      })
    })
  }
  ...
})
```