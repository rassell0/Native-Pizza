import { View, Text, Button , SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { toggleSignin } from '../../../store/slices'
const AccountTabLoggedIn = () => {

const account = useSelector(state => state.slices.account)
const dispatch = useDispatch()
async function logout(){
const clear = await AsyncStorage.removeItem("token")
dispatch(toggleSignin(false))
}




  return (
    <View style={[tw`flex-1 `,{backgroundColor:"#1b1a1a"}]}>
      <SafeAreaView style={[tw`flex-0.2 items-center pt-20`,{backgroundColor:"#292828"}] }>
<Text style={tw`text-3xl font-bold text-white`}>{account.firstName} {account.lastName} </Text>
<Text style={tw`text-white my-1`}>{account.email} </Text>
<Text style={tw`text-white my-1`}>{account.number} </Text>

<Button title='Log Out' color={"red"} onPress={logout}/>

      </SafeAreaView>
    </View>
  )
}

export default AccountTabLoggedIn