// import '../_mockLocations'
import React, { useContext, useCallback} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const {state:{recording}, addLocation} = useContext(LocationContext)
    const callback = useCallback( location => {
        addLocation(location, recording)
    },[recording])
    const [err] = useLocation(isFocused || recording, callback)
    return (
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
            <Text h3 >Create a Track</Text>
                
            <Map />
            
            {err ? <Text>Please enable location Servcie</Text> : null}
            <Spacer />
            <TrackForm />
        </SafeAreaView>
    )
}
TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name='plus' size={20} />
}
const styles= StyleSheet.create({
    container: {
        padding: 5
    }
})
export default withNavigationFocus(TrackCreateScreen)