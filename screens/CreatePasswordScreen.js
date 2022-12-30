import { View, Text, TextInput, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import LoginButton from '../components/LoginButton';
import { useDispatch, useSelector } from 'react-redux';
import { createAccountPassword,toggleSignin } from '../store/slices';
import { createUser, saveUser } from '../util/auth';
const CreatePasswordScreen = ({navigation}) => {

const width = Dimensions.get("window").width - 330
const account = useSelector((state)=> state.slices.account)
const dispatch = useDispatch()
  const [userInfo,setUserInfo] = useState({
  password:"",
  passwordConfirm:""
})

function updatePassword(input){
setUserInfo((state)=>{
  return{
    ...state,
    password:input
  }
})
}
function updatePasswordConfirmation(input){
setUserInfo((state)=>{
  return{
    ...state,
    passwordConfirm:input
  }
})
}

const verify = userInfo.password === userInfo.passwordConfirm && userInfo.password !== "" && userInfo.password.length > 6



  async function createAccount(){
  await createUser(account.email,userInfo.password)
  await saveUser(account)
dispatch(toggleSignin(true))
  navigation.navigate("start")
}



  return (
    <SafeAreaView style={[tw` flex-1 justify-between items-center `,{backgroundColor:"#1b1a1a",}]}>
        <View >    
      <Text style={tw` text-3xl my-2 text-red-700 ml-23 font-extrabold mt-5 mb-6`} >Native Pizza</Text>
      <View style={tw`flex-row justify-between my-2`}>
        <Text style={tw`font-bold text-lg text-white`}>Create a Password</Text>
        <Text style={tw` text-lg text-white`}>2/2</Text>
      </View>
        <TextInput 
          style={[tw`text-white  border-b border-white h-15 pt-5 my-5 w-${width}`]}
          placeholderTextColor="white"
          placeholder='Password'
          returnKeyType='done'
          onChangeText={updatePassword}
          autoCorrect={false}
          />
      <TextInput 
        style={[tw`text-white  border-b border-white h-15 pt-5 w-${width}`]} 
        placeholderTextColor="white" 
        placeholder='Confirm Password'
        returnKeyType='done'
        onChangeText={updatePasswordConfirmation}
        autoCorrect={false}
        />
      
      
</View>
      <View>   
        
<LoginButton title={"Create Account"} verify={verify} color={"green"} textColor="white" width={width} onPress={createAccount}/>


      </View>

    </SafeAreaView>
  )
}

export default CreatePasswordScreen