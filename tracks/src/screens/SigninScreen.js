import React, {useState, useContext} from 'react'
import {View,StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import {Text,Input,Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation'


const SigninScreen = ({ navigation }) => {
    const {state, signin, clearErrorMsg} = useContext(AuthContext)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
   
   

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={() => clearErrorMsg() } />
            <ScrollView showsHorizontalScrollIndicator={false}>
               
            <Spacer>
            <Text h3>Sign In for Tracker</Text>
            </Spacer>
            <Input 
            label='Email'
            value={email}
            onChangeText={(newTerm)=> setEmail(newTerm)}
            autoCapitalize= 'none'
            />
            <Spacer />
            <Input 
            secureTextEntry
            label='Password'
            value={password}
            onChangeText={(newTerm)=> setPassword(newTerm)}
            autoCapitalize= 'none'
            />
            
            {state.errorMessage? <Text style={styles.erormsg}>{state.errorMessage}</Text>: null}
            <Spacer >
            <Button 
            title='Sign In' 
            type="outline" 
            style={styles.but}
            onPress={()=> signin({email, password})}
            />
            </Spacer>
            <Spacer>
            <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.link}>Go back to Sign up Screen </Text>
            </TouchableOpacity>
            </Spacer>
            </ScrollView>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25
    },
    but: {
        alignSelf: 'stretch'
    },
    erormsg: {
        fontSize: 16,
        color: 'red'
    },
    link: {
        color: 'blue',
        fontSize: 16
    }
})

export default SigninScreen
