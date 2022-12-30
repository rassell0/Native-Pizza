import { View, Text, Image,Alert } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SettingsBtn from '../../../components/SettingsBtn'
import AccountButton from '../../../components/AccountButton'
import AddToCartButton from '../../../components/AddToCartButton'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../../store/slices'
const FavoriteItems = ({props}) => {

const dispatch = useDispatch()
function addToCart(){
  dispatch(addOrder({data:props,quanity:1}))
  Alert.alert("Added 1 item to your order")
}

  return (
    <View style={[tw`m-4 rounded`,{backgroundColor:"#292828",width:350,height:200}]}>
        <View style={tw`flex-row items-center justify-between border-b border-white`}>
             <Text style={tw`font-bold text-white text-xl m-2`}>{props.name}</Text>
            <SettingsBtn/>
        </View>
     <View style={tw`flex-row border-b border-white`}>
        <View style={tw`m-2 justify-center`}>
            <Image style={tw`h-15 w-20 rounded-sm`} source={{uri:props.uri}}/>
        </View>
        <View style={tw`m-2 justify-center`}>
            <Text style={tw`text-white`}>Price: {props.price}</Text>
            <Text style={tw`text-white`}>Calories: {props.calories}</Text>
            <Text style={tw`text-white`}>Slices: {props.slices}</Text>
        </View>
       
     </View> 
     <AddToCartButton onPress={addToCart}  title={"Add to order"} textColor={"green"}  width={"100%"}/>
    </View>
  )
}

export default FavoriteItems