import {useContext} from 'react'
import {Context as TrackContext} from '../context/TrackContext'
import {Context as LocationContext} from '../context/LocationContext'

export default () => {
    const {createTracks} = useContext(TrackContext)
    const {state: {locations, name}, reset} = useContext(LocationContext)


    const saveTrack = async() => {
        await createTracks(name, locations)
        reset()
    }

    return [saveTrack]
}
