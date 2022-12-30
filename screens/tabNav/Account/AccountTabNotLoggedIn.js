import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AddToCartButton from '../../../components/AddToCartButton'
import AccountButton from '../../../components/AccountButton'
import { useNavigation } from '@react-navigation/native'
const AccountTabNotLoggedIn = () => {

    const navigation = useNavigation()
    function loginNavigator(){
     
        navigation.navigate("login")
    }
    function createAccountNavigator(){
     
        navigation.navigate("create")
    }
    

  return (
    <View style={[tw`flex-1 `, {backgroundColor:"#0d0c0c"}]}>
 <View style={[tw`flex-0.4 items-center pt-35`, {backgroundColor:"#292828"}]}>
 <Text style={tw`text-red-700 font-bold text-5xl my-2 mb-5 `}>Native Pizza</Text>
 <View style={tw` w-full items-center my-5`}>
 <AddToCartButton onPress={loginNavigator} style={tw`mb-10`} title={"Log in"} color={"green"} textColor={"white"} width={"80%"}/>
 </View>
 
      <AccountButton onPress={createAccountNavigator} style={tw``} title={"Create an account"}/>
 </View>
    </View>
  )
}

export default AccountTabNotLoggedIn