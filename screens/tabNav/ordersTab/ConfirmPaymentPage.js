import { View, Text, Modal , SafeAreaView} from 'react-native'
import React from 'react'
import AddToCartButton from '../../../components/AddToCartButton'
import tw from 'twrnc'
const ConfirmPaymentPage = ({onPress}) => {
  return (
    <Modal>
        <SafeAreaView style={[tw`items-center flex-1 justify-between`,{backgroundColor:"#292828"}]}>
            <View style={tw`items-center`}>
               <Text style={tw`text-white font-bold text-2xl`}>Order Placed!</Text>
      <Text style={tw`text-white font-bold text-2xl`}>Your food is on its way</Text> 
            </View>
      
      <AddToCartButton onPress={onPress} title={"Back to home"} color={"green"} textColor={"white"} width={"90%"}/>
    </SafeAreaView> 
    </Modal>
   
  )
}

export default ConfirmPaymentPage