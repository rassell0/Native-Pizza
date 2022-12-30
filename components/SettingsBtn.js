import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import tw from 'twrnc'
const SettingsBtn = ({onPress}) => {
  return (
    <Pressable style={tw`m-4`} onPress={onPress}>
      <Ionicons name="ellipsis-horizontal" color={"white"} size={25}/>
    </Pressable>
  )
}

export default SettingsBtn