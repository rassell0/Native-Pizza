import { View, Text ,Image, Pressable} from 'react-native'
import React from 'react'
import tw from 'twrnc'
const EachOrder = ({props }) => {
  return (
    <View style={[tw`py-3 px-5 border-b `,{backgroundColor:"#0d0c0c",borderColor:"#696868"}]}>
  <View style={tw`flex-row`}>
    <Image style={{width:100,height:70,borderRadius:5}} source={{uri:props.data.uri}} />
    <Text style={tw`text-white text-lg ml-4`}>{props.data.name}</Text>
  </View>
  <View style={tw`flex-row justify-between mt-3`}>
    <Pressable onPress={()=>console.log(props.data)}>
        <Text style={tw`text-white text-lg `}>Qty: {props.quanity}</Text>
    
        
    </Pressable>
    <Text style={tw`text-white text-lg `}>${props.data.price * props.quanity}</Text>
  </View>
    </View>
  )
}

export default EachOrder