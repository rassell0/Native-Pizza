import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import tw from "twrnc"
import AccountButton from '../components/AccountButton';
import Button from '../components/Button';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAccount, setAddress, toggleSignin } from '../store/slices';
import { getUser } from '../util/auth';

const StartScreen = ({navigation}) => {



  const isSignedIn = useSelector((state)=> state.slices.signedIn)
const dispatch = useDispatch()
useLayoutEffect(()=>{
async function isLoggedIn(){
  const delivery = await AsyncStorage.getItem("delivery")
  if(delivery){
    dispatch(setAddress(delivery))
    navigation.navigate("orders")
  } 
  

const confirm = await AsyncStorage.getItem("token")
//console.log(confirm)
if(confirm){
  const accounts = await getUser()
  for(const name in accounts){
    if(accounts[name].email === confirm){
      dispatch(createAccount(accounts[name]))
    }
  }
dispatch(toggleSignin(true))
}
}

isLoggedIn()
},[])


function loginNavigator(){
    navigation.navigate("login")
}
function createAccountNavigator(){
 
    navigation.navigate("create")
}

function carryout(){
  navigation.navigate("orderOptions",{name:"carryout"})
}
function delivery(){
  navigation.navigate("orderOptions",{name:"delivery"})
}


  return (
    <ImageBackground style={{flex:1}} resizeMode="cover" source={{uri:"https://wallpapercrafter.com/desktop/302246-Food-Pizza-Phone-Wallpaper.jpg"}}>
      <StatusBar style="inverted" />
<SafeAreaView style={[tw`flex-1`,{backgroundColor:'rgba(0,0,0,0.5)'}]}>
  <View style={tw`items-center justify-center flex-1 ` }>
<Text style={tw`text-white text-5xl my-2 `}>Native Pizza</Text>
<Text style={tw`text-white text-3xl my-1`}>Welcome</Text>
<Text style={tw`text-white text-2xl my-1`}>All of your favorite pizza </Text>

  <Button title={"Delivery"} color="white" width={64} icon={"car-sport"} onPress={delivery}/>
  <Button title={"Carryout"} color="white" width={64} icon={"business"} onPress={carryout}/>
</View>

{!isSignedIn && 

<View style={tw`items-center  `}>

  <AccountButton onPress={loginNavigator} title={"Log in"}/>
  <AccountButton onPress={createAccountNavigator} title={"Create an Account"}/>
</View>
}
</SafeAreaView>
     </ImageBackground>
  )
}

export default StartScreen