import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
  import { Ionicons}from "@expo/vector-icons"
  import tw from "twrnc"
const OrderOptionsButton = ({color, onPress,title, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[tw`flex-row items-center px-4 border border-gray-500 py-3 mx-2 rounded-full justify-between`, {backgroundColor: color}]}>
    
<Ionicons style={tw`mx-1`} name={icon} size={20} color={"white"}/>
<Text style={[tw`mx-1`, {color:"white"}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default OrderOptionsButton