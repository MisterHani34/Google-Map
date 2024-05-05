import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../Util/colors'


export default function CategoryItem({Category}) {
  return (
    <View style={{padding:6,height:100,width:100,margin:7,alignItems:'center',backgroundColor:colors.white,borderRadius:20,justifyContent:'center',elevation:6}}>
        <Image source={Category.icon}
           style={{width:50,height:50}}
        
        />
      <Text style={{fontSize:15,fontFamily:'ubuntubold'}}>{Category.name}</Text>
    </View>
  )
}