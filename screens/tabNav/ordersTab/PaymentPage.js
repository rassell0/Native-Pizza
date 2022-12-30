import { View, Text, Modal,SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import AddToCartButton from '../../../components/AddToCartButton'
import BackButton from '../../../components/BackButton'
import OrderButton from '../../../components/OrderButton'




const PaymentPage = ({onPress,extract}) => {

const [cardInfo, setCardInfo] = useState({
    number:"",
    exp:"",
    cvc:"",
    name:""
})


const disabled = cardInfo.number.length === 16 && cardInfo.cvc.length === 3 && cardInfo.exp.length ===4 && cardInfo.name.length !== 0


function updateNum(value){
    setCardInfo((state)=>{
        return {
            ...state,
            number:value
        }
    })
}
function updateCvc(value){
    setCardInfo((state)=>{
        return {
            ...state,
            cvc:value
        }
    })
}
function updateName(value){
    setCardInfo((state)=>{
        return {
            ...state,
            name:value
        }
    })
}


function updateExp(value){
    setCardInfo((state)=>{
        return {
            ...state,
            exp:value
        }
    })
   
}

function setDebit(){
    extract(cardInfo.number.slice(-4))
    onPress()
}





  return (
    <Modal animationType="slide">
      <SafeAreaView style={[tw`flex-1  `,{backgroundColor:"#0d0c0c"}]}>
       
        <BackButton onPress={onPress} margin={40}/>
       
        <View style={[tw`flex-col justify-start  mx-5`]}>
          <TextInput placeholder='Card Number'
 placeholderTextColor={"#696868"} 
 style={[tw` border-b-2 text-white text-3xl my-5 mt-10 `,{borderColor:"#696868"}]}
 maxLength={16}
 keyboardType="decimal-pad"
 returnKeyType="done"
 onChangeText={updateNum}
 //autoFocus={true}
 />
<TextInput placeholder='Name on card'
 placeholderTextColor={"#696868"} 
 style={[tw` border-b-2 text-white text-3xl my-5 `,{borderColor:"#696868"}]}
 keyboardType="name-phone-pad"
 returnKeyType="done"
 onChangeText={updateName}
 />

    <TextInput placeholder='Expires MM/YY'
 placeholderTextColor={"#696868"} 
 style={[tw` border-b-2 text-white text-3xl my-5`,{borderColor:"#696868"}]}
 keyboardType="decimal-pad"
 returnKeyType="done"
 onChangeText={updateExp}
 />
<TextInput placeholder='CVV'
 placeholderTextColor={"#696868"} 
 style={[tw` border-b-2 text-white text-3xl my-5`,{borderColor:"#696868", minWidth:"40%"}]}
 maxLength={3}
 keyboardType="decimal-pad"
 returnKeyType="done"
 onChangeText={updateCvc}
 />
<TextInput placeholder='Billing zip code'
 placeholderTextColor={"#696868"} 
 style={[tw` border-b-2 text-white text-3xl my-5`,{borderColor:"#696868", minWidth:"46%"}]}
 maxLength={5}
 keyboardType="decimal-pad"
 returnKeyType="done"
 />
</View>  
<View style={[tw`border-t-2 items-center mt-80 pt-5`,{borderColor:"#696868"}]}>
<OrderButton disabled={!disabled} onPress={setDebit} title={`Add Payment`} color={"green"} textColor={"white"} width={"90%"}/>
</View>
        



      </SafeAreaView>
    </Modal>
  )
}

export default PaymentPage