import { View, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import tw from "twrnc"
const LoginButton = ({ title, color , textColor,width, verify, onPress}) => {
  return (
  <TouchableOpacity onPress={onPress} disabled={!verify} style={[tw`rounded-full w-${width} h-15 items-center justify-center m-2 flex-row`,{backgroundColor:color,opacity:!verify ? 0.5 : 1}]} >

    <Text style={[tw`text-xl m-1`,{color:textColor}]}>{title}</Text>
  </TouchableOpacity>
  )
}

export default LoginButton