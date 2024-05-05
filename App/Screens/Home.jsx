import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Headers from '../Components/Headers'
import GoogleMapView from '../Components/GoogleMapView'
import CategoryList from '../Components/CategoryList'
import GlobalApi from '../Services/GlobalApi'


export default function Home() {
useEffect(()=>{
  GetNearBySearchPlace();
},[])

        const GetNearBySearchPlace=()=>{
              GlobalApi.nearByPlace().then(resp=>{console.log(resp.data.results)

              })
        }


  return (
    <View style={{padding:20}}>
      <Headers/>
      <GoogleMapView/>
      <CategoryList/>
    </View>
  )
}