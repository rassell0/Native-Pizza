import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import tw from "twrnc"
const OrderButton = ({ title, color , textColor,width, onPress, disabled}) => {
  return (
  <TouchableOpacity onPress={onPress} disabled={disabled} style={[tw`rounded-full w-${width} h-15 items-center justify-center my-1 flex-row`,{backgroundColor:color,opacity:disabled && 0.5}]} >

    <Text style={[tw`text-xl m-1`,{color:textColor}]}>{title}</Text>
  </TouchableOpacity>
  )
}

export default OrderButton