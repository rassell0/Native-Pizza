import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Orders from './Orders'
import Items from './Items'
const FavoritesTab = () => {
    const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{backgroundColor:"#292828"},
      tabBarLabelStyle:{color:"white"}
    }}>
        <Tab.Screen name='orders' component={Orders}/>
        <Tab.Screen name='Items' component={Items}/>
    </Tab.Navigator>
  )
}

export default FavoritesTab