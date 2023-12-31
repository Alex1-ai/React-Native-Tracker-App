import React , { useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext';
import { View, StyleSheet } from 'react-native'
// import { NavigationEvents } from 'react-navigation'
import { useFocusEffect } from '@react-navigation/native';
import { Button, Input, Text } from '@rneui/themed';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)

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
          headerText={"Sign In for Tracker"}
          errorMessage={state.errorMessage}
          submitButtonText={"Sign In"}
          onSubmit={signin}

        />

        <NavLink
          text={"Go back to sign up."}
          routeName={"Signup"}
          
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

})
export default SigninScreen