import { View, Text, TextInput, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import LoginButton from '../../components/LoginButton'
import { getUser, login } from '../../util/auth'
import { useDispatch } from 'react-redux'
import { toggleSignin, createAccount } from '../../store/slices'
const LoginModal = ({navigation}) => {
const width = Dimensions.get("window").width - 330
const dispatch = useDispatch()

  const [userInfo,setUserInfo] = useState({
  email:"",
  password:""
})

function updateEmail(input){
setUserInfo((state)=>{
  return{
    ...state,
    email:input
  }
})
}
function updatePassword(input){
setUserInfo((state)=>{
  return{
    ...state,
    password:input
  }
})
}


async function loggingIn(){
  const inThere = await login(userInfo.email,userInfo.password)
if(inThere){
  const setUser = await getUser()
 for(const name in setUser){
  if(setUser[name].email === userInfo.email) {
    console.log(setUser[name])
    dispatch(createAccount(setUser[name]))
   }
 }
   

   dispatch(toggleSignin(true))
 navigation.navigate("start")
}
}

const verify = userInfo.email.includes("@") && userInfo.password.length > 6



  return (
    <SafeAreaView style={[tw` flex-1 justify-between items-center `,{backgroundColor:"#1b1a1a"}]}>
        <View >  
           <View style={tw`items-center`}>
            <Text style={tw` text-3xl my-2 text-red-700  font-extrabold mt-5 mb-6`} >Native Pizza</Text>
            </View>
      
      
        <TextInput 
          style={[tw`text-white  border-b border-white h-15 pt-5 my-5 w-${width}`]}
          placeholderTextColor="white"
          placeholder='Email'
          returnKeyType='done'
          onChangeText={updateEmail}
          autoCapitalize={false}
          />
      <TextInput 
        style={[tw`text-white  border-b border-white h-15 pt-5`]} 
        placeholderTextColor="white" 
        placeholder='Password'
        returnKeyType='done'
        onChangeText={updatePassword}
        />
      
      
</View>
      <View>   
        
<LoginButton title={"Log in"} verify={verify} color={"green"} textColor="white" width={width} onPress={loggingIn} />

      </View>

    </SafeAreaView>
  )
}

export default LoginModal