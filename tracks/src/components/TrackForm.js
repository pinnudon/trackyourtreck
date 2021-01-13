import React,{useContext} from 'react'
import Spacer from '../components/Spacer'
import {View} from 'react-native'
import {Input, Button} from 'react-native-elements'
import useSaveTracks from '../hooks/useSaveTracks'
import {Context as LocationContext} from '../context/LocationContext'



const TrackForm = ()=> {
    const {state: {name, recording, locations},startRecording, stopRecording, changeName} = useContext(LocationContext)
    const [saveTrack] = useSaveTracks()
    return (
        <View>
            <Input 
            placeholder='Your Name'
            value={name}
            onChangeText = {changeName}
            />
            {recording ? 
            <Button title='Stop' onPress={stopRecording} />
            : <Button onPress= {startRecording} title="Start Rcording" />}
            <Spacer />
            {
                !recording && locations.length ?
                <Button title="Save Recording" onPress= {saveTrack} />
                : null
            }
            
        </View>
    )
}


export default TrackForm 