import { View, Text, FlatList, Modal } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import HorizontalPizzaList from '../../components/HorizontalPizzaList'
import tw from "twrnc"
import { getData } from '../../util/auth'
import AccountButton from '../../components/AccountButton'
const HomeTab = ({navigation}) => {
     
const [allmeals,setAllMeals] = useState()


    useLayoutEffect(()=>{
        async function fetch(){
    const fetching = await getData()
    setAllMeals(fetching)
  
    }
fetch()
    },[])

function render(itemData){


    return <HorizontalPizzaList props={itemData.item} key={Math.random()} />
}

  return (
    <View style={[tw`flex-1`,{backgroundColor:"#0d0c0c"}]}>
     <FlatList data={allmeals} renderItem={render}/>

      
    </View>
  )
}

export default HomeTab