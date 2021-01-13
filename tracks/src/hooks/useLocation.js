import {useState,useEffect} from 'react'

import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location'


export default (shoudlTrack, callback) => {
    
    const [err, setErr] = useState(null)
    

    useEffect(()=> {
        let subscriber

        const startWatching =  async () => {
            try {
                await requestPermissionsAsync()
                const subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 2
                },
                 callback
                 )
            } catch(e) {
                setErr(e)
            }
        }
        if(shoudlTrack){
            startWatching()
        }else {
            if(subscriber){
                subscriber.remove()
            }
            subscriber= null
            
        }
        return ()=> {
            if(subscriber){
                subscriber.remove()
            }
        }
    },[shoudlTrack, callback])
    return [err]
}