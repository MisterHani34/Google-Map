import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {
    const CategoryList=[
{
    id:1,
    name:'Gas-station',
    value:'gas-station',
    icon:require('../../assets/gas.png')
},
{
    id:2,
    name:'Restaurants',
    value:'restaurants',
    icon:require('../../assets/res.png')
},
{
    id:3,
    name:'Cafeteria',
    value:'cafeteria',
    icon:require('../../assets/cafe.png')
}

    ]
  return (
    <View style={{marginTop:10}}>
      <Text style={{
        fontSize:20,
        fontFamily:'ubuntubold'
      }}>  Select Top Category</Text>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={CategoryList}
      renderItem={({item})=>(
         <TouchableOpacity onPress={()=>console.log(item.name)} >
         <CategoryItem Category={item}/>
         </TouchableOpacity>  


      )}
      
      
      
      />
    </View>
  )
}