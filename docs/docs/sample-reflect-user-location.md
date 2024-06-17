---
title: 'Reflect user location'
description: This section shows an example of how to reflect the client location on the map using markers.
---

<ReflectUserLocation></ReflectUserLocation>

```js
const map = new jsVectorMap({
  async onLoaded(map) {
    const response = await fetch('https://ipinfo.io/geo')
    const data = await response.json()

    map.addMarkers({
      coords: data.loc.split(','),
      name: `${data.city} - ${data.country} (${data.ip})`
    })
  }
})
```