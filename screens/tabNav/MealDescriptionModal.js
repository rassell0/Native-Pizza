import { View, Text, Modal,Image, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import SelectDropdown from 'react-native-select-dropdown'
import BackButton from '../../components/BackButton'
import AddToCartButton from '../../components/AddToCartButton'
import AddToFavoriteBtn from '../../components/AddToFavoriteBtn'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../store/slices'

const MealDescriptionModal = ({props, onPress}) => {
const [quanity,setQuanity] = useState(1)


const amount = [1,2,3,4,5,6,7,8,9,10]

const dispatch = useDispatch()
function addToCart(){
  dispatch(addOrder({data:props,quanity:quanity}))
  Alert.alert("Added to your order", quanity + " item(s)",[{text:"OK", onPress:onPress}])
}
  return (
 
    <Modal animationType="slide"   >
        <View style={tw`flex-0.5 `} >  
        <Image style={tw`w-1/1 h-1/1`} source={{uri:props.uri}}/>
       <BackButton onPress={onPress} margin={40}/>
        </View>
       
     <View style={[tw`flex-1 justify-between`,{backgroundColor:"#0d0c0c"}]}>
     <View >
        <Text style={tw`font-bold text-4xl m-2 mt-5 text-white`}>{props.name}</Text>
     <Text style={tw`font-bold text-lg m-2 text-white`}>${props.price} {props.calories}cal/slice {props.slices} slices</Text>
     <Text style={tw` text-lg m-2 text-white`}>{props.description}</Text>


<View style={tw`items-center justify-end mt-5`}>
<AddToFavoriteBtn props={props}/>
</View>
    
 </View>
 <View style={[tw`bg-blue-500 h-30 border-t border-gray-500 flex-row items-center justify-around pb-7`, {backgroundColor:"#292828"}]}>
<SelectDropdown defaultValue={1}
onSelect={(selectedNum)=>{
setQuanity(selectedNum)
}}
 data={amount} 
  dropdownIconPosition={"right"} 
  buttonStyle={{width:55 , height:55, borderRadius:100,backgroundColor:"#0d0c0c"}} 
  buttonTextStyle={{color:"white"}}
  />
<AddToCartButton onPress={addToCart} title={"Add to Order"} color={"green"} textColor={"white"} width={"70%"}/>
 </View>
     </View>
    </Modal> 
   
  )
}

export default MealDescriptionModal