import { View, Text, Dimensions, TouchableOpacity,TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import LoginButton from '../../components/LoginButton'
import { useDispatch } from 'react-redux'
import { createAccount } from '../../store/slices'
const CreateAccountModal = ({navigation}) => {
const dispatch = useDispatch()

const width = Dimensions.get("window").width - 330
const [userInfo,setUserInfo] = useState({
  firstName:"",
  lastName:"",
  email:"",
  number:""
  
})
  
function updateFirstName(input){
  setUserInfo((state)=>{
    return {
      ...state,
      firstName:input
    }
  })
}
function updateLastName(input){
  setUserInfo((state)=>{
    return {
      ...state,
      lastName:input
    }
  })
}
function updateEmail(input){
  setUserInfo((state)=>{
    return {
      ...state,
      email:input
    }
  })
}
function updateNumber(input){
  setUserInfo((state)=>{
    return {
      ...state,
      number:input
    }
  })
}

function createPasswordNavigator(){
  dispatch(createAccount(userInfo))
  navigation.navigate("createP")
}

const verify = userInfo.firstName !== "" && userInfo.lastName !== "" && userInfo.email.includes("@") && userInfo.number.length === 10 



  return (
    <SafeAreaView style={[tw` flex-1 justify-between items-center `,{backgroundColor:"#1b1a1a"}]}>
        <View>    
<View style={tw`items-center`}>
  <Text style={tw` text-3xl my-2 text-red-700  font-extrabold mt-5 `} >Native Pizza</Text>
</View>
      
      <View style={tw`flex-row justify-between my-5`}>
        <Text style={tw`font-bold text-lg text-white`}>Tell us about yourself</Text>
        <Text style={tw` text-lg text-white`}>1/2</Text>
      </View>
      
        <TextInput 
          style={[tw`text-white  border-b border-white h-15 pt-5 my-5 w-${width}`]}
          placeholderTextColor="white"
          placeholder='First Name'
          returnKeyType='done'
          onChangeText={updateFirstName}
          />
      <TextInput 
        style={[tw`text-white  border-b border-white h-15 pt-5 my-5`]} 
        placeholderTextColor="white" 
        placeholder='Last Name'
        returnKeyType='done'
        onChangeText={updateLastName}
        />
      <TextInput 
        style={[tw`text-white  border-b border-white h-15 pt-5 my-5`]} 
        placeholderTextColor="white" 
        placeholder='Email'
        returnKeyType='done'
        onChangeText={updateEmail}
        />
      <TextInput 
        style={[tw`text-white  border-b border-white h-15 pt-5 my-5`]} 
        placeholderTextColor="white" 
        placeholder='Phone'
        returnKeyType='done'
        onChangeText={updateNumber}
        keyboardType={"number-pad"}
        maxLength={10}
        />
      
      
</View>
      <View>   
        
<LoginButton title={"Next"} verify={verify} color={"green"} textColor="white" width={width} onPress={createPasswordNavigator} />

      </View>

    </SafeAreaView>
  )
}

export default CreateAccountModal