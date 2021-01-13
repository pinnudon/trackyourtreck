import React, {useContext} from 'react'
import {Text,View,StyleSheet, TouchableOpacity,FlatList} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {ListItem} from 'react-native-elements'
import {Context as TrackContext} from '../context/TrackContext'
const TrackListScreen = ({ navigation }) => {

    const {state,fetchTracks} = useContext(TrackContext)
    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks} />
           
            <FlatList
            data={state}
            keyExtractor= {(item)=> item._id}
            renderItem = {({item}) => {
                return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
                    <Text style={styles.text}>Track name: {item.name}</Text>
                    </TouchableOpacity>
            }}
            />
            
        </View>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}
const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    }
})

export default TrackListScreen