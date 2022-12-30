import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
const AccountButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw`my-2`}> 
      <Text style={tw`text-white text-2xl font-semibold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AccountButton