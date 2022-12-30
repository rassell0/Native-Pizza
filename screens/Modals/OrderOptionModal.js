import { View, Text, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc"
import OrderOptionsButton from '../../components/OrderOptionsButton'
import BackButton from '../../components/BackButton'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLEAPIKEY } from '../../util/key'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress } from '../../store/slices'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OrderOptionModal = ({navigation, route}) => {


  const [orderOption, setOrderOption] = useState("")
  const dispatch = useDispatch()
  const address = useSelector((state)=> state.slices.address)
useLayoutEffect(()=>{
if(route.params.name === "carryout"){
setOrderOption("carryout")
}else{
  setOrderOption("delivery")
}
},[])


  function goBack(){
    navigation.goBack()
  }

function switchToD(){
  setOrderOption("delivery")
}
function switchToC(){
  setOrderOption("carryout")
}


const Delivery = () =>{

function test(data,details){
  dispatch(setAddress(details.name))
  AsyncStorage.setItem("delivery", details.name)
  navigation.navigate("orders")
}


  return (
   <>
   <View style={tw`flex-row justify-center`}>
<OrderOptionsButton onPress={switchToD} color={"green"} style={tw`m-10`} title={"Delivery"} icon={"car-sport"}/>
<OrderOptionsButton onPress={switchToC} style={tw`my-1`} title={"Carryout"} icon={"business"}/>
<BackButton onPress={goBack}/>
</View>


 <GooglePlacesAutocomplete
 nearbyPlacesAPI='GooglePlacesSearch'
 debounce={400}
 placeholder={"Deliver To"}
 
onPress={test}
 styles={{textInput:{
  backgroundColor:"#292828",
  fontSize:30,
  color:"rgb(107, 114, 128)",
  borderBottomWidth:2,
  borderBottomColor:"rgb(107, 114, 128)",
  color:"rgb(107, 114, 128)",
 
 },
textInputContainer:{
  marginHorizontal:15,
  placeholderTextColor:"rgb(107, 114, 128)",
  marginVertical:30,
  
},
}}

autoFocus={true}
fetchDetails={true}
 query={{
  key:GOOGLEAPIKEY,
  language:"en",
  type:"address"
}}
//currentLocation={true}
 />

        </>
        
    
  )
}

const Carryout = () =>{
  return (
    <>
    <View style={tw`flex-row justify-center`}>
 <OrderOptionsButton onPress={switchToD}  style={tw`m-10`} title={"Delivery"} icon={"car-sport"}/>
 <OrderOptionsButton onPress={switchToC} color={"green"} style={tw`my-1`} title={"Carryout"} icon={"business"}/>
 <BackButton margin={2} onPress={goBack}/>
 </View>
 <TextInput placeholder='Zip Code' placeholderTextColor={"gray"} style={tw` my-10 mx-5 text-3xl border-b-2 border-gray-500`}/>

         </>
         
     
   )
}



  return (
   <SafeAreaView style={[tw`flex-1`,{backgroundColor:"#292828"}]}>
    {orderOption === "delivery" ? <Delivery/> : <Carryout/>}

   </SafeAreaView>
       
    
 
  )
}

export default OrderOptionModal