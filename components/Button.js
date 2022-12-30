import { View, Text, TouchableOpacity } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import React from 'react'
import tw from "twrnc"
const Button = ({icon, title, color , textColor,width, onPress}) => {
  return (
  <TouchableOpacity onPress={onPress}  style={[tw`rounded-full w-${width} h-15 items-center justify-center m-2 flex-row`,{backgroundColor:color}]} >
<Ionicons name={icon} size={33}/>
    <Text style={[tw`text-xl m-1`,{color:textColor}]}>{title}</Text>
  </TouchableOpacity>
  )
}

export default Button