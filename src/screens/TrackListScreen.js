import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const TrackListScreen = ({navigation}) => {
  return (
    <View>
        <Text>TrackListScreen</Text>
        <Button title="Track Detials Screen" onPress={()=>navigation.navigate('trackDetail')}/>
        
    </View>
  )
}

const styles = StyleSheet.create({

})
export default TrackListScreen