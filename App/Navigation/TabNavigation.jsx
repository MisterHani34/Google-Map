import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import {colors} from'../Util/colors';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (  
    <Tab.Navigator screenOptions={{
            headerShown:false,
tabBarActiveTintColor:'#E59135'
    }}>
    <Tab.Screen name="Home" component={Home}  options={{
         tabBarLabel:'home',
         tabBarIcon:({color,size})=>(
            <FontAwesome name="home"  color={color} size={size} />
         ),
         
        
    }}/>

    <Tab.Screen name="Search" component={Search} 
    options={{
         tabBarLabel:'search',
         tabBarIcon:({color,size})=>(
            <Fontisto name="search" color={color} size={size} />
         ),
    }}/>


    <Tab.Screen name="fav" component={Fav} 
     options={{
        tabBarLabel:'fav',
        tabBarIcon:({color,size})=>(
            <MaterialIcons name="favorite" color={color} size={size} />
        ),
        }}/>


    <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user-circle-o" color={color} size={size} />
            ),}}
    />
    

  </Tab.Navigator>
  )
}