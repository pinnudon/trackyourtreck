import * as Location from 'expo-location'

const ten = 0.0001

const getLocation = inc => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 77.4977 + inc * ten,
            latitude: 27.2046 + inc * ten
        }
    }
}

let counter = 0

setInterval(()=> {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        Location: getLocation(counter)
    })
    counter ++
},1000)