import React, { useState, useContext } from 'react'
import {  StyleSheet,  View } from 'react-native'
import { Button, Input, Text } from '@rneui/themed';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
    const { state, signup } = useContext(AuthContext)
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Spacer >
      <Text  h3 >Sign Up for Tracker</Text>
       </Spacer>
       <Spacer />
      <Input 
       label="Email"
        value={email}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(changeEmail) => setEmail(changeEmail)}/>
      <Spacer />
      <Input 
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      { state.errorMessage? <Text style={styles.errorMessage}>{state.errorMessage}</Text>:null}
      <Spacer>
        
      <Button title="Sign Up"  onPress={()=>signup({email, password})} />
      </Spacer>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        // borderColor: 'red',

        // borderWidth: 10, 
        flex: 1,
        justifyContent:'center',
        marginBottom: 200
                                                                                                                                                                                                                               
    },
    errorMessage:{
        fontSize: 16,
        color:'red',
        marginLeft: 15,
        marginTop: 15
    }
    // titleStyle:{
    //     flexDirection:'column',
    //     borderColor: 'red',
    //     borderWidth: 10,
    //     paddingStart: 10,
    //     // flex: 2,
    //     padding: 10,
    //     justifyContent:'flex-end',
    //     alignContent:'flex-start'
    // }
})
export default SignupScreen