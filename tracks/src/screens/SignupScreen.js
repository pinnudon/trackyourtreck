import React, {useState, useContext, useEffect} from 'react'
import {View,StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import {Text,Input,Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = ({ navigation }) => {
    const {state, signup, clearErrorMsg, localSignup} = useContext(AuthContext)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(()=> {
        localSignup()
    }, [])

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={() => clearErrorMsg()}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
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
            title='Sign Up' 
            type="outline" s
            tyle={styles.but}
            onPress={()=> signup({email, password})}
            />
            </Spacer>
            <Spacer>
            <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
                <Text style={styles.link}>Already have account? Go to Sign in </Text>
            </TouchableOpacity>
            </Spacer>
            </ScrollView>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen

{/* <Text style={{ fontSize: 18}}>Hello there signup screen</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
                <Text>Go to signin screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('mainFlow')}>
                <Text>Go to main flow</Text>
            </TouchableOpacity> */}