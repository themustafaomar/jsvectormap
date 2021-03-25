---
title: 'Visualize data'
description: Map visualization is used to analyze and display the geographically related data and present it in the form of maps.
menu: Visualize data
category: overview
position: 1
---

## Data visualization example
This option was introduced since version 1.3

```js
const map = new jsVectorMap({
  visualizeData: {
    scale: ['#eeeeee', '#999999'],
    values: {
      EG: 29,
      US: 100,
      CA: 190,
      BR: 75,
      // ...
    }
  }
})
```