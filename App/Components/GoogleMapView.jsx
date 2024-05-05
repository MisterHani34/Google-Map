import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView,{Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { UserLocationContext } from '../Context/UserLocationContext';





export default function GoogleMapView() {
  
const[mapRegion,setmapRegion]=useState({});
const{location,setLocation}=useContext(UserLocationContext)

useEffect(()=>{
 
  setmapRegion({
  latitude:36.0704528,
  longitude: 4.7556201,
  latitudeDelta:0.0522,
  longitudeDelta:0.0421,

  })
  




},[location])
  return (
    <View style={{marginTop:20}}>
      <Text style={{
        fontSize:20,
        fontWeight:"400",
        fontFamily:'ubuntubold',
        marginBottom:10


      }}>
    Top Near By Places
      </Text>
      <View style={{marginTop:20,borderRadius:20,overflow:'hidden'}}>
      <MapView style={{width: Dimensions.get('screen').width*0.89,
        height:Dimensions.get('screen').height*0.23,
        }}
        provider={PROVIDER_GOOGLE}
        showsTraffic={true}
        showsUserLocation={false}
        region={mapRegion}
       >
      <Marker
      title="Mister Hani"
      coordinate={mapRegion}
      />
       </MapView>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
    map: {
        
      },
     
 
 
 
 })