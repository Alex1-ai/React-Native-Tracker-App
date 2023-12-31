import '../_mockLocation';
import React, { useEffect, useState, useContext, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native'
import { Text } from '@rneui/themed'
import { requestBackgroundPermissionsAsync,watchHeadingAsync,Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = () => {
    const {state:{ recording}, addLocation } = useContext(LocationContext);
    const [isFocused, setIsFocused] = useState(false);
    const callback = useCallback(location=>{
        addLocation(location, recording)
    }, [recording])
    const [ err] = useLocation(isFocused || recording, callback)
    // console.log(isFocussed)
    useFocusEffect(
        useCallback(() => {
          console.log('Screen is focused');
          // Add any logic you want to run when the screen is focused
          setIsFocused(true)
          // Clean up function (optional)
          return () => {
            console.log('Screen is unfocused');
            // Add any cleanup logic here
            setIsFocused(false)
          };
        }, []))
        
    

    
    
    
  return (
    <View>
        <Map />
        {/* <NavigationEvent onWillBlur={()=>console.log("leaving")}/> */}
        {/* <Text>TrackCreateScreen</Text> */}
        { err ? <Text>Please enable location services </Text>:null}
        < TrackForm />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen