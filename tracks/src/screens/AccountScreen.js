import React, {useContext} from 'react'
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import Spacer from '../components/Spacer'
import {SafeAreaView} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen = ({ navigation }) => {
    const {signout} = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>
            <Text style={styles.text1}>Account Screen</Text>
            </Spacer>
            <TouchableOpacity style={styles.button} onPress={signout}>
                <Text style={styles.text}>Sign out</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} /> 
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginTop: 50,
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: 'blue'
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        padding: 5,
        color: 'blue'
    },
    text1 : {
        fontWeight: 'bold',
        alignContent: 'center',
        fontSize: 25
    }
})
export default AccountScreen