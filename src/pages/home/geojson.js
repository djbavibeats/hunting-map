const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [ -86.76977210369314, 36.15761505288509 ]
            },
            properties: {
                title: 'Fearless Records',
                description: 'Nashville, TN',
                type: 'tacklebox'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [ -118.35485330514496, 34.0613695896722 ]
            },
            properties: {
                title: 'Fearless Records',
                description: 'Los Angeles, CA',
                type: 'tacklebox'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [ -73.97812588853213, 40.67943414392307 ]
            },
            properties: {
                title: 'Some Apartment',
                description: 'Brooklyn, NY',
                type: 'tacklebox'
            }
        },
    ]
}
    
export default geojson
    