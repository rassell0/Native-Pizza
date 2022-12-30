import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import AddToCartButton from '../../../components/AddToCartButton'
import AccountButton from '../../../components/AccountButton'

const ItemsNotLoggedIn = () => {
    const navigation = useNavigation()
    function loginNavigator(){
        navigation.navigate("login")
    }
    function createAccountNavigator(){
     
        navigation.navigate("create")
    }
    
  return (
    <View style={[tw`flex-1 items-center pt-12`,{backgroundColor:"#0d0c0c"}]} >
        <Image style={{width:100,height:100}} source={{uri:"https://cdn4.iconfinder.com/data/icons/emoji-47/48/21-hungry-512.png"}}/>
      <Text style={tw`text-white text-base mt-7`}>Login or Create an account to start</Text>
      <Text style={tw`text-white text-base mb-7`}>adding favorites for easy reordering!</Text>
      
      <AddToCartButton  onPress={loginNavigator} title={"Log in"} color={"green"} textColor={"white"} width={"80%"}/>
      <AccountButton onPress={createAccountNavigator} title={"Create an account"}/>
    </View>
  )
}

export default ItemsNotLoggedIn