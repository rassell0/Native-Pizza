import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from './HomeTab';
import {Ionicons} from "@expo/vector-icons"
import OrderTab from './ordersTab/OrderTab';
import RewardsTab from './RewardsTab';
import AccountTab from './Account/AccountTab';
import FavoritesTab from './favorites/FavoritesTab';
import Items from './favorites/Items';
import { useSelector } from 'react-redux';
const RootTab = () => {
    const Tab = createBottomTabNavigator()
    const totalOrders = useSelector((state)=> state.slices.orders)

    let badge = null;

    if(totalOrders.length > 0){
      badge = totalOrders.length
    }


  return (
    <Tab.Navigator screenOptions={{
      headerStyle:{ backgroundColor:"#292828" },
      headerTintColor:"white",
      tabBarStyle:{backgroundColor:"#292828"}
    }}>
     <Tab.Screen name='home' options={{tabBarIcon:({color,size})=>{ return <Ionicons size={size} color={color} name='pizza'/>}}}  component={HomeTab}/>
    <Tab.Screen name='favorites' options={{title:"Favorites",tabBarIcon:({color,size})=>{ return <Ionicons size={size} color={color} name='heart-outline'/>}}} component={Items}/>
     <Tab.Screen name='order' options={{title:"My Order",tabBarIcon:({color,size})=>{ return <Ionicons size={size} color={color} name='cart'/>}, tabBarBadge:badge }} component={OrderTab}/>
     <Tab.Screen name="account" options={{headerShown:false,tabBarIcon:({color,size})=>{ return <Ionicons size={size} color={color} name='person-outline'/>}}} component={AccountTab} />
   
   
    </Tab.Navigator>
  )
}

export default RootTab