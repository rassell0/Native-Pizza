import { View, Text,Image, FlatList } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import AddToCartButton from '../../../components/AddToCartButton'
import { useSelector } from 'react-redux'
import FavoriteItems from './FavoriteItems'
import { getUser, checkFav } from '../../../util/auth'
// FAVORITE LIST WONT UPDATE WITHOUT RELOAD
const ItemsLoggedIn = () => {

const [favorites, setFavorites]= useState([])
const toggle = useSelector((state)=> state.slices.toggle)
  const account = useSelector(state => state.slices.account)
  useLayoutEffect(()=>{
    
    async function checkFavorite(){
      const allAccounts = await getUser()
      for(const id in allAccounts){
        if(allAccounts[id].email === account.email){
          const checking = await checkFav(id)
          for(const id in checking){
        setFavorites((state)=> {
            return [...state,checking[id]]
              }
            )  
            
          }
        }
      }
    }
    checkFavorite()
  },[account])

  const render = (itemData) =>(
    <FavoriteItems props={itemData.item}/>
    )
  
 
  return (
    <View style={[tw`flex-1 items-center pt-5`,{backgroundColor:"#0d0c0c"}]} >
      
      {favorites.length === 0 ?<><Image style={{width:100,height:100}} source={{uri:"https://cdn4.iconfinder.com/data/icons/emoji-47/48/21-hungry-512.png"}}/>
      <Text style={tw`text-white text-base mt-7`}>You haven't added any favorite items</Text>
      <Text style={tw`text-white text-base mb-7`}>yet! Tap the heart on a menu item </Text>
      <Text style={tw`text-white text-base mb-7`}>screen to save it to your favorites </Text></> 
      :
   <FlatList renderItem={render} data={favorites} keyExtractor={() => Math.random()}/>}
      
     
 
      
      
    </View>
  )
}

export default ItemsLoggedIn