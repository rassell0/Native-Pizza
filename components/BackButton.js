import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import tw from "twrnc"
const BackButton = ({onPress, margin}) => {
  return (
   <TouchableOpacity onPress={onPress} style={[tw`absolute right-2 rounded-full`,{top:margin, backgroundColor:"black"}]}>
<Ionicons name='close-outline' color={"white"} size={40}/>
   </TouchableOpacity>
  )
}

export default BackButton