import React, {  useContext } from 'react'
import {  StyleSheet,  View} from 'react-native'
// import { Button, Input, Text } from '@rneui/themed';
// import Spacer from '../components/Spacer';
import { useFocusEffect } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)
    
    
    useFocusEffect(
        React.useCallback(() => {
          // This is equivalent to onWillBlur in NavigationEvents
          clearErrorMessage();
          return () => {
            // This is equivalent to onWillBlur in NavigationEvents
          };
        }, [])
      );
  
  return (
    <View style={styles.container}>
        <AuthForm 
          headerText={"Sign Up for Tracker"}
          errorMessage={state.errorMessage}
          submitButtonText={" Sign Up"}
          onSubmit={signup}
        />

        <NavLink
          text={"Already have an account? Sign in instead!"}
          routeName={"Signin"}
          
        />
     

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