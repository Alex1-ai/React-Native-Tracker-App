import React, { useCallback, useContext} from 'react'
import {  StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Button, Card } from '@rneui/themed'
// import { ListItem } from '@rneui/base';
import { useFocusEffect } from '@react-navigation/native';
import Spacer from '../components/Spacer'
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
  const { state,fetchTracks } = useContext(TrackContext);
  console.log(state)
  useFocusEffect(
    useCallback(() => {
      console.log('Screen is focused');
      fetchTracks()
      // Add any logic you want to run when the screen is focused
      // setIsFocused(true)
      // Clean up function (optional)
      return () => {
        console.log('Screen is unfocused');
        // Add any cleanup logic here
        // setIsFocused(false)
      };
    }, []))
  return (
    <View>
        {/* <Text>TrackListScreen</Text> */}

        <Spacer />

        <FlatList
          data={state}
          keyExtractor={item=>item?._id}
          renderItem={({item})=>{
            console.log(item)
            return (
                <TouchableOpacity onPress={
                  ()=>navigation.navigate('trackDetail', {_id:item._id})
                  }>
                   < Card >
                     <Text>{ item.name}</Text>
                   </Card>
                     
                  
                </TouchableOpacity>
                
                 )
          }}
        
        />
        <Spacer />
        {/* <Spacer>
           <Button title="Track Detials Screen" onPress={()=>navigation.navigate('trackDetail')}/>
        </Spacer> */}


    </View>
  )
}

const styles = StyleSheet.create({

})
export default TrackListScreen

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}