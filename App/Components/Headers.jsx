import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import colors from '../Util/colors'
import Search from '../Screens/Search'


export default function Headers() {
  return (
    <View style={styles.container}> 
      
      <Image source={require ('../../assets/logo.png')} 
              style={styles.logo}/>
      <View >
          <TextInput placeholder='Search'
          style={styles.SearchBar}/>
      </View>
      <Image source={require('../../assets/image.jpg')} style={styles.iimage}/>
      
    </View>
  )
}
const styles = StyleSheet.create({
     logo:{
      width:70,
      height:70
     },
     container:{
     display:'flex',
     flexDirection:'row',
     gap:10,
     justifyContent:'space-evenly',
     alignItems:'center'


     },
     SearchBar:{
      borderColor:colors.oree,
      borderWidth:2,
      borderRadius:20,
      padding:4,
      width:Dimensions.get('screen').width*0.6,
      paddingLeft:20


     },

     iimage:{
     width:50,
     height:50,
     borderRadius:50

     },
     map: {
       width: '100%',
       height: '100%',
     },




})