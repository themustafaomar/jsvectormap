var zimbabweData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Zimbabwe"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [25.2373, -17.8282], // Western boundary point
                        [33.0568, -17.8282], // Eastern boundary point
                        [33.0568, -22.4172], // Easternmost point
                        [25.2373, -22.4172], // Westernmost point
                        [25.2373, -17.8282] // Closing point (same as first point)
                    ]
                ]
            }
        }
    ]
};

// Export the GeoJSON data
export default zimbabweData;
