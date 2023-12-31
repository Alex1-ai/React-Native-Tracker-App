import React, { useContext} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Button } from '@rneui/themed'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
  return (
    <>
        {/* <Text>AccountScreen</Text> */}
        <Spacer />
        <Spacer>
        <Button title="Sign Out" onPress={signout} />
        </Spacer>

        
    </>
  )
}

const styles = StyleSheet.create({
   
})
export default AccountScreen