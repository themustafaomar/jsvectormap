---
title: Changelog
metadata:
  title: Changelog
  description: Discover all the release notes for the Jsvectormap.
---

## v1.7.0 (latest)

- feat(maps): add Brazil map ([#160](https://github.com/themustafaomar/jsvectormap/pull/160)) ([f13156c](https://github.com/themustafaomar/jsvectormap/commit/f13156c6310e9cff2a7061eac015391ebef1dda9))
- feat: add setSelectedMarkers and fix element events ([#162](https://github.com/themustafaomar/jsvectormap/pull/162) ([fa3208b](https://github.com/themustafaomar/jsvectormap/commit/fa3208b939e86bcc56382e2c9e6d7d21bfc2d392)))
- refactor: rename jsvectormap.js to jsvectormap.esm.js ([afce9da](https://github.com/themustafaomar/jsvectormap/commit/afce9dab9c77d4982af21db9d460b9e69beff62a))
- refactor: drop class definition comment from classes ([#164](https://github.com/themustafaomar/jsvectormap/pull/164) ([a87a1bb](https://github.com/themustafaomar/jsvectormap/commit/a87a1bb98d1a1c08ee58711e62d35cf802a46734)))
- feat(lines): add curved lines with curvature option ([#165](https://github.com/themustafaomar/jsvectormap/pull/165)) ([79ba655](https://github.com/themustafaomar/jsvectormap/commit/79ba655dae310c629fe9eaeaf6c1f16170258f39))
- fix(lines): programmatic creation of lines fails ([#168](https://github.com/themustafaomar/jsvectormap/pull/168)) ([b74d42f](https://github.com/themustafaomar/jsvectormap/commit/b74d42ff453dcf18385f456014e91999a41103df))
- refactor: enhance marker and line components ([#169](https://github.com/themustafaomar/jsvectormap/pull/169)) ([74d2912](https://github.com/themustafaomar/jsvectormap/commit/74d29120b071a3022215a2709a67bf1620a9ccd0))
- refactor: replace deprecated pageY/XOffset with scrollY/X ([#170](https://github.com/themustafaomar/jsvectormap/pull/170)) ([1362f18](https://github.com/themustafaomar/jsvectormap/commit/1362f18bc04aa08bdb5e95b4dc0ae03b469408b9))
- chore: replace class with id ([c172982](https://github.com/themustafaomar/jsvectormap/commit/c172982d5c28033ef3a83691897daf6a8d61c3fa))
- fix: hide tooltip via prevent default ([#180](https://github.com/themustafaomar/jsvectormap/pull/180)) ([38dc963](https://github.com/themustafaomar/jsvectormap/commit/38dc96364092c8abb02125401a8acc9baad0a9e1))
- feat: support ability to customize zoom buttons ([#182](https://github.com/themustafaomar/jsvectormap/pull/182)) ([c13b5d4](https://github.com/themustafaomar/jsvectormap/commit/c13b5d4f44725eb02b08440dc675db3de55111b3))
- fix: panning to scroll on mobile devices #171 ([#183](https://github.com/themustafaomar/jsvectormap/pull/183)) ([3083525](https://github.com/themustafaomar/jsvectormap/commit/308352526567e301c22466229ee03ea4d3fbe540))
- refactor: missing using zoomInOption variable at [#182](https://github.com/themustafaomar/jsvectormap/pull/182) ([c2ef7e7](https://github.com/themustafaomar/jsvectormap/commit/c2ef7e76861999bab8326f66d35a2b715bc9d7fc))
- fix: tooltip might be undefined see [#126](https://github.com/themustafaomar/jsvectormap/issues/126) [#179](https://github.com/themustafaomar/jsvectormap/issues/179) ([#186](https://github.com/themustafaomar/jsvectormap/pull/186)) ([c2cfb10](https://github.com/themustafaomar/jsvectormap/commit/c2cfb1058b9b221cfa5108931f34c4859046187a))
 

## v1.6.0

- feat(maps): create the build maps script ([99894b8](https://github.com/themustafaomar/jsvectormap/commit/99894b8baf44c5d7a7fe72bf1b46ff77fe6b264c))
- feat(regions): set/clear selected regions programmatically ([e6fab94](https://github.com/themustafaomar/jsvectormap/commit/b3b80304414c5f56b4219e810d5cf5d4c447a28e)) ([#137](https://github.com/themustafaomar/jsvectormap/pull/137))
- fix(markers): add markers method ([a59cc39](https://github.com/themustafaomar/jsvectormap/commit/a59cc39d5c2e2fff2bbea074d470cc234b14a23d))
- chore: drop internet explorer entirly ([964dcdd](https://github.com/themustafaomar/jsvectormap/commit/964dcdd4e057cb2c0db24f09ee6092e1b746c26e))
- fix(visualization): NAN value is encountered when min and max are the same ([b3b8030](https://github.com/themustafaomar/jsvectormap/commit/b3b80304414c5f56b4219e810d5cf5d4c447a28e)) ([#147](https://github.com/themustafaomar/jsvectormap/pull/147))
- feat: allow all styles in add markers ([bb8366e](https://github.com/themustafaomar/jsvectormap/commit/bb8366ebeb3a6734697522bd72ea49fa61419f03)) ([#140](https://github.com/themustafaomar/jsvectormap/pull/140))
- feat: refactor: support umd, es and cjs formats ([b338ef9](https://github.com/themustafaomar/jsvectormap/pull/153/commits/b338ef972bba5db26969e0986ec9960631911459)) ([#153](https://github.com/themustafaomar/jsvectormap/pull/153))

### BREAKING CHANGES

Removed `js` and `css` from dist folder, so if you're importing jsvectormap from dist/js/jsvectormap.js it becomes dist/jsvectormap.js and css as well.

```html
<!-- 
  /dist/js/jsvectormap.js       -> /dist/jsvectormap.js
  /dist/js/jsvectormap.min.js   -> /dist/jsvectormap.min.js
  /dist/js/jsvectormap.css      -> /dist/jsvectormap.css
  /dist/js/jsvectormap.min.css  -> /dist/jsvectormap.min.css
-->
```

Another thing is, when you add a particular style per marker please specify the case you want to apply the style for eg initial, hover, selected and selectedHover.

```js
const map = new jsVectorMap({
  markers: [
    {
      name: 'Palestine',
      coords: [31.9522, 35.2332],
      // ❌ This isn't gonna work anymore
      style: { fill: 'red' },
      // ✅ Instead, style the marker based on its case.
      style: {
        initial: {
          fill: 'red'
        },
        // etc...
        hover: {}
      }
    }
  ]
})
```

## v1.5.3

- fix: dragging doesn't work on mobile devices ([#126](https://github.com/themustafaomar/jsvectormap/issues/126))

## v1.5.2

- fix(markers): get/clear selected markers
- fix: series doesn't receive markers nor regions
- fix(events): tooltip fails when it's disabled ([#117](https://github.com/themustafaomar/jsvectormap/issues/117))
- perf: massively improves performance when not using labels ([#115](https://github.com/themustafaomar/jsvectormap/pull/115))
- style: replace let with const for the sake of consistency
- refactor: abstract the zoom handlers
- style: replace let with const
- style: imporve variable declaration
- fix: zoom on mobile ([#104](https://github.com/themustafaomar/jsvectormap/issues/104))
- refactor: replace jsvectormap.js with index.js

## v1.5.1

- fix: region label fails ([#92](https://github.com/themustafaomar/jsvectormap/issues/92))
- fix: add ability to customize circled markers ([#97](https://github.com/themustafaomar/jsvectormap/discussions/97))
- refactor: improve consistency & readability ([5cf594d](https://github.com/themustafaomar/jsvectormap/commit/5cf594d62d3ea1175d7a56e994a90740246fd778))

## v1.5.0

- feat(events): onRegion/MarkerClick support ([#29](https://github.com/themustafaomar/jsvectormap/issues/29)) 
- fix: shaky click selects a region ([#47](https://github.com/themustafaomar/jsvectormap/issues/47))
- fix: lines reposition fails
- refactor: improve the destroy method
- refactor: build an abstract class for components
- refactor: improve consistency & remove addMarker entirely
- feat: ability to remove a line or multiple lines
- refactor: better name conventions ([#86](https://github.com/themustafaomar/jsvectormap/pull/86))
- refactor: move elements to components ([#81](https://github.com/themustafaomar/jsvectormap/pull/81))
- refactor: get selector from merged options directly
- fix: too much recursion error ([#75](https://github.com/themustafaomar/jsvectormap/issues/75)) ([#76](https://github.com/themustafaomar/jsvectormap/pull/76))
- feat(lines): ability to remove lines ([#72](https://github.com/themustafaomar/jsvectormap/discussions/72))
- fix(typo): 'tranparent' typo in default options ([#71](https://github.com/themustafaomar/jsvectormap/pull/71))

### Release Notes

Starting from v1.5.0 the `addLine` and `removeLine` are deprecated and will be removed soon, as an alternative please use `addLines` [see docs](/docs/lines) and `removeLines` [see docs](/docs/lines).

Events `onRegionTooltipShow` and `onMarkerTooltipShow` will receive the native event as the first argument.

```js
const map = new jsVectorMap({})

// ❌ Avoid this in the future versions.
map.addLine()

// ✅ Use `addLines` method to add a line or multiple lines.
map.addLines({ from: 'Palestine', to: 'Ukraine' })

map.addLines([
  { from: 'United States', to: 'Egypt' },
  { from: 'Palestine', to: 'Ukraine' },
])

// ❌ Avoid this in the future versions.
map.removeLine('United States', 'Egypt')

// ✅ Use `removeLines` method to remove multiple lines or all lines.
map.removeLines()

map.removeLines([{ from: 'United States', to: 'Egypt' }])

// Events

const map = new jsVectorMap({
  ...
  onRegionTooltipShow(event, tooltip, index) {
    // ..
  }
  onMarkerTooltipShow(event, tooltip, index) {
    // ..
  }
  ...
})
```

## v1.4.5

- fix: jsvectormap constructor is not accessible ([#69](https://github.com/themustafaomar/jsvectormap/issues/69))
- refactor: drop webpack development server
- docs: import typo
- fix: touch events

## v1.4.4

- fix: lines position fail when zooming in/out ([#63](https://github.com/themustafaomar/jsvectormap/issues/63))

## v1.4.3

- refactor: switch addMap, maps, defaults to static ([3b3b13d](https://github.com/themustafaomar/jsvectormap/commit/3b3b13d2a81907dc88dc809b36e9c0c45cf50e7e))
- revert: revert tooltip's css method ([83b7822](https://github.com/themustafaomar/jsvectormap/commit/83b782208d263f9802aded5f4b26c54519fd7e1f))
- fix: touch handlers ([fc4dbe4](https://github.com/themustafaomar/jsvectormap/commit/fc4dbe4dffea50d723f0490dc86c71170fc46f8b))
- chore: cleaning up ([a8be4ef](https://github.com/themustafaomar/jsvectormap/commit/a8be4effb41ea0ef59d802a3d03388fa2e15cccd))
- fix: marker's render function ([5136fae](https://github.com/themustafaomar/jsvectormap/commit/5136fae14f441ff3439ed82590f2a48fe471b60c))

### BREAKING CHANGES

All other maps except `world` and `world_merc` are ignored from the npm package, but it's available on Github, you can download these maps from [Available maps](/docs/available-maps) page.

## v1.4.2

- fix: tooltip not destroyed

## v1.4.0

- refactor: drop dom handler class
- refactor: move tooltip functionality to class [(#53)](https://github.com/themustafaomar/jsvectormap/pull/53)
- fix: fix mouseup event & fix zoom buttons
- refactor: clean up util api
- refactor: refactor directory structure
- fix: fix 'addMarkers' method doesn't work with arrays
- fix(scroll): fix mouse wheel behavior [(#52)](https://github.com/themustafaomar/jsvectormap/pull/52)

### BREAKING CHANGES

In early versions the `map` container was an instance of a custom dom handler class that contains a `delegate` method, now it's just a DOM element, so the `delegate` method won't be available anymore.

```js
const map = new jsVectorMap({
  // ...
  onLoaded: (map) => {
    // ❌ Won't work anymore.
    map.container.delegate('.jvm-region', 'click', (event) => {
      // ..
    })

    // ✅ You will need to define your own event listener, example
    map.container.addEventListener('click', (event) => {
      if (event.target.matches('.jvm-region')) {
        // Do something
      }
    })
  },
  // ...
})
```

#### Tooltip instance

The tooltip also was a `DomHandler` instance, now it's a `Tooltip` instance which implements these methods `getElement`, `show`, `hide`, `text`, `css`.

```js
const map = new jsVectorMap({
  // ...
  onMarkerTooltipShow(tooltip, index) {
    // ❌ Won't work anymore.
    const element = tooltip.selector

    // Do something with the tooltip DOM element..

    // ✅ If you need the tooltip DOM element, you can access it like so:
    const element = tooltip.getElement()

    // Do something with the tooltip DOM element, or..
    // tooltip.css({ backgroundColor: 'red' })
    // tooltip.text('Hello')
  },
  // ...
})
```

## v1.3.3

- fix: dragging the map selects the region (#48)
- fix: eventHandler's off method doesn't delete the reference
- style: correct events names for consistency
- feat: introduce a new event 'onDestroyed'
- fix(add-markers): add markers method not working with object