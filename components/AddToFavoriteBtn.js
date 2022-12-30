import { View, Text, Pressable, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import { useSelector } from 'react-redux'
import {  addToFavorite, checkFav, getUser, removeFavorite } from '../util/auth'
import { useDispatch } from 'react-redux'
import { updateFav } from '../store/slices'
const AddToFavoriteBtn = ({props}) => {
const isSignedIn = useSelector(state => state.slices.signedIn)
const account = useSelector(state => state.slices.account)
const [isFavorite,setIsFavorite] = useState(false)
const dispatch = useDispatch()
let icon;
let message;

useLayoutEffect(()=>{
  async function checkFavorite(){
    const allAccounts = await getUser()
    for(const id in allAccounts){
      if(allAccounts[id].email === account.email){
        const checking = await checkFav(id)
        for(const name in checking){
          if(checking[name].name === props.name){
            setIsFavorite(true)
          }
        }
      }
    }
  }
  checkFavorite()
},[])



if(!isFavorite){
icon = "heart-outline"
message ="Add To Favorite"
}else{
  icon = "heart"
  message = "Favorited"
}

async function storeFav(){
  const allAccounts = await getUser()
  for(const id in allAccounts){
   if(allAccounts[id].email === account.email){
    addToFavorite(id,props)
    dispatch(updateFav)
   }
  }
}

async function deleteFavorite(){
  const allAccounts = await getUser()
  for(const id in allAccounts){
    if(allAccounts[id].email === account.email){
      const checking = await checkFav(id)
      for(const name in checking){
        if(checking[name].name === props.name){
          removeFavorite(id,name)
          dispatch(updateFav)
        }
      }
    }
  }
  setIsFavorite(false)
}

function toggleFavorite(){
if(!isSignedIn){
  Alert.alert("You must sign in to add favorites")
  return
}

  if(!isFavorite){
    Alert.alert("This order has been added to your favorites")
   
     storeFav()
    setIsFavorite(true)
  }else{
    Alert.alert("Are you sure you want to remove this from your favorites", "",[{text:"Cancel"},{text:"Remove", onPress:deleteFavorite}])
    
  }
  
}


  return (
    <Pressable onPress={toggleFavorite} style={tw`flex-row items-center `}>
<Ionicons name={icon} color={"green"} size={40}/>
      <Text style={tw`text-white text-2xl ml-1`}>{message}</Text>
    </Pressable>
  )
}

export default AddToFavoriteBtn