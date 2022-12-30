import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import AddToCartButton from '../../components/AddToCartButton'
import AccountButton from '../../components/AccountButton'
import { useNavigation } from '@react-navigation/native'
import AddToFavoriteBtn from '../../components/AddToFavoriteBtn'
const RewardsTab = () => {
const navigation = useNavigation()
    function loginNavigator(){
        navigation.navigate("login")
    }
    function createAccountNavigator(){
     
        navigation.navigate("create")
    }
    
    
  return (
    <View style={[tw`flex-1 items-center pt-20`,{backgroundColor:"#0d0c0c"}]} >
        <Image style={{width:100,height:100}} source={{uri:"https://cdn-icons-png.flaticon.com/512/2094/2094661.png"}}/>
      <Text style={tw`text-white text-base mt-7`}>Login or Join now to start earning</Text>
      <Text style={tw`text-white text-base`}>Reward Points you can redeem towards any</Text>
      <Text style={tw`text-white text-base mb-5`}>menu item</Text>
      <AddToCartButton onPress={loginNavigator} title={"Log in"} color={"green"} textColor={"white"} width={"80%"}/>
      <AccountButton onPress={createAccountNavigator} title={"Join Now"}/>
      
    </View>
  )
}

export default RewardsTab