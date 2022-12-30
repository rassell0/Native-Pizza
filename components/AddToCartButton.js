import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import tw from "twrnc"
const AddToCartButton = ({ title, color , textColor,width, onPress}) => {
  return (
  <TouchableOpacity onPress={onPress}  style={[tw`rounded-full w-${width} h-15 items-center justify-center my-1 flex-row`,{backgroundColor:color}]} >

    <Text style={[tw`text-xl m-1`,{color:textColor}]}>{title}</Text>
  </TouchableOpacity>
  )
}

export default AddToCartButton