import React, { useContext} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, {  Polyline } from 'react-native-maps'
import Spacer from '../components/Spacer'


const TrackDetailScreen = ({ navigation, route}) => {
  const { state } = useContext(TrackContext)
  const _id= route.params._id

  console.log(_id)
  const track = state.find(t=>t._id === _id)
  const initialCoords = track.locations[0].coords;
  return (
    <>
        <Text  style={styles.headerTitle}>{ track.name}</Text>

        {/* <Spacer /> */}
        {/* <Spacer /> */}
        
        <MapView
           initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            ...initialCoords
           }}

          style={styles.mapStyle}
        
        >
          <Polyline coordinates={track.locations.map(loc=>loc.coords)} />
        </MapView>


        <Spacer />
        <Spacer />
        <TouchableOpacity onPress={()=>navigation.navigate('trackList')}>
               <Text style={styles.buttonStyle}> 👈 Go Back </Text>
        </TouchableOpacity>
        
    </>
  )
}

const styles = StyleSheet.create({
  mapStyle:{
    height: 400
  },
  buttonStyle:{
    marginLeft: 15,
    fontSize: 30

  },
  headerTitle:{
    color: 'gray',
    marginLeft: 80,
    fontSize: 40,
    marginBottom: 10
  }


})
export default TrackDetailScreen