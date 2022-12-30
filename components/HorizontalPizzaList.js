import { View, Text, TouchableOpacity, Image, FlatList, Modal } from 'react-native'
import React, { useState} from 'react'
import tw from "twrnc"
import MealDescriptionModal from '../screens/tabNav/MealDescriptionModal'


const HorizontalPizzaList = ({props}) => {

const [toggleModal, setToggleModal] = useState(false)
const [mealInfo, setMealInfo] = useState()

function goBack(){
  setToggleModal(false)
}


function render(itemData){




function test(){
    setMealInfo(itemData.item)
   setToggleModal(true)
}


return( < >

<View>
<TouchableOpacity  onPress={test}>
    <Image style={tw`w-45 h-30 rounded-lg mx-4 my-2`} source={{uri:itemData.item.uri}}/>
</TouchableOpacity>
<Text style={tw`text-white font-bold mx-4`}>{itemData.item.name}</Text>
</View></>
 )

}

  return (
    <View>
         
        <View style={tw`flex-row items-end justify-between m-4`}>
<Text style={tw`text-xl font-bold text-white`}>{props[0].id}</Text>
<TouchableOpacity>
    <Text style={tw`text-white`}>See all</Text>
</TouchableOpacity>
        </View>
      <FlatList data={props}  horizontal renderItem={render} keyExtractor={item=> item.description}/>
      {toggleModal && <MealDescriptionModal props={mealInfo} onPress={goBack}/>}
    </View>
  )
}

export default HorizontalPizzaList