---
title: Available maps
metadata:
  title: Available maps
  description: Explore the built-in maps in jsvectormap, their projections, and download links.
---

jsvectormap provides a set of predefined maps that you can use out of the box, each map has a specific projection, and you can download the files directly.

## Maps  

| Name         | Description                        | Projection                  | Download Link |
|--------------|------------------------------------|-----------------------------|--------------|
| `world`      | The world map                      | **Miller**                  | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/world.js) |
| `world_merc` | The world map (Mercator)           | **Mercator**                | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/world-merc.js) |
| `us_mill_en` | The United States map              | **Miller**                  | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/us-mill-en.js) |
| `us_merc_en` | The United States map (Mercator)   | **Mercator**                | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/us-merc-en.js) |
| `us_lcc_en`  | The United States map (LCC)        | **Lambert Conformal Conic** | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/us-lcc-en.js) |
| `us_aea_en`  | The United States map (AEA)        | **Albers Equal Area**       | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/us-aea-en.js) |
| `spain`      | The Spain map                      | **Mercator**                | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/spain.js) |
| `russia`     | The Russia map                     | **Mercator**                | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/russia.js) |
| `canada`     | The Canada map                     | *Unknown*                   | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/canada.js) |
| `iraq`       | The Iraq map                       | *Unknown*                   | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/master/src/maps/iraq.js) |
| `brasil`     | The Brazil map                     | *Unknown*                   | [Download](https://raw.githubusercontent.com/themustafaomar/jsvectormap/main/packages/maps/src/brasil.js) |

> **Note:** If a map's projection is not specified, it is either unknown or based on a custom projection.

## Generating Custom Maps  

If you need a map that is not listed above, you can generate your own using **jVectorMap's** map creation tools.  

Refer to the [jVectorMap Map Generation Guide](https://github.com/bjornd/jvectormap) for instructions on how to create and convert maps for jsvectormap.  
