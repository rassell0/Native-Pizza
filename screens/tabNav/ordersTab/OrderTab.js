import { View, Text, Pressable, FlatList,Alert,TouchableOpacity , ScrollView, Dimensions} from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import {Ionicons} from "@expo/vector-icons"
import AddToCartButton from '../../../components/AddToCartButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector,useDispatch } from 'react-redux'
import EachOrder from './EachOrder'
import { deleteAllOrders } from "../../../store/slices"
import { useNavigation } from '@react-navigation/native'
import PaymentPage from './PaymentPage'
import ConfirmPaymentPage from './ConfirmPaymentPage'
import OrderButton from '../../../components/OrderButton'
const OrderTab = ({navigation}) => {

const [togglePaymentModal, setTogglePaymentModal]= useState(false)
const [lastFour, setLastFour] = useState(null)
const [confirmPayment,setConfirmPayment] = useState(false)

const dispatch = useDispatch()

function goToMenu(){
navigation.navigate("home")
}

function goHome(){
  setConfirmPayment(false)
  navigation.navigate("home")
  dispatch(deleteAllOrders([]))
}

function makePayment(){
  setConfirmPayment(true)
}

function extractCard(value){
setLastFour(value)
}


function togglePaymentPage(){
setTogglePaymentModal(state => !state)
}

const allOrders = useSelector(state=>state.slices.orders)

let subtotal = 0; 

  for(let i = 0; i < allOrders.length; i++){
  subtotal += allOrders[i].data.price
}

let tax = subtotal * 0.06
tax = tax.toFixed(2)
let total = subtotal + Number(tax) + 2.99
total = total.toFixed(2)
function NoOrders(){
  return(
    <View style={[tw` m-5 rounded items-center justify-around`,{backgroundColor:"#292828",width:"90%",height:"55%"}]}>
    <View style={tw`items-center`}>
        <Ionicons size={60} color={"white"} name='pizza-outline'/>
<Text style={tw`text-white text-lg`}>There's nothing here yet.</Text>
<Text style={tw`text-white text-lg`}>Why not start with a pizza?</Text>
    </View>
    <AddToCartButton onPress={goToMenu} title={"Go to the menu"} color={"green"} textColor={"white"} width={"90%"}/>
</View>
  )
}



function Order(){
const pickupType =  AsyncStorage.getItem("delivery")
const dispatch = useDispatch()


function removeOrders(){
  dispatch(deleteAllOrders([]))
}

function deleteOrders(){
 Alert.alert("Confirm", "Do you want to remove all items from your cart?",
 [{text:"Cancel"},{text:"Remove All", onPress:removeOrders }])
}

const orderList = allOrders.map((order)=>(
  <EachOrder key={Math.random()} props={order}/>
   )
)
//#292828
  return(
    <View style={tw`justify-between flex-1`}>
      {togglePaymentModal && <PaymentPage onPress = {togglePaymentPage} extract={extractCard} />}
      {confirmPayment && <ConfirmPaymentPage onPress={goHome}/>}
    <View >
    <View style={[tw`flex-row items-center px-5  border-b  py-5 justify-between`,{borderColor:"#696868"}]}>
      <Text style={tw`text-white text-lg font-bold ml-2`}>Order</Text>
      <Pressable onPress={deleteOrders}>
        <Text style={tw`text-green-400   ml-2`}>Remove All</Text>
      </Pressable>
    </View>
    <View style={{height:"78.2%"}}>
      <ScrollView>
      {orderList}
<View style={tw`m-5`}>
 
  <View style={tw`flex-row justify-between my-1`}>
    <Text style={tw`text-white text-base`}>Subtotal</Text>
    <Text style={tw`text-white text-base`}>${subtotal}</Text>
  </View>
  <View style={tw`flex-row justify-between my-1`}>
    <Text style={tw`text-white text-base`}>Tax</Text>
    <Text style={tw`text-white text-base`}>${tax}</Text>
  </View>
  <View style={tw`flex-row justify-between my-1`}>
    <Text style={tw`text-white text-base`}>Delivery Fee</Text>
    <Text style={tw`text-white text-base`}>$2.99</Text>
  </View>
  <View style={tw`flex-row justify-between my-1`}>
    <Text style={tw`text-white text-base font-bold`}>Order Total</Text>
    <Text style={tw`text-white text-base font-bold`}>${ total}</Text>
  </View>
  <Pressable onPress={togglePaymentPage} style={[tw`flex-row justify-between my-1 border-b border-t items-center py-4`,{borderColor:"#696868"}]}>
   <View style={tw`flex-row`}>
    {!lastFour && <Text style={tw`text-white text-base`}>Add </Text>}
    <Text style={tw`text-white text-base`}>Payment Method</Text>
    
   </View>
    <View style={tw`flex-row items-center`}>
       <Ionicons name='card-outline' size={50} color={"white"}/>
       {lastFour && <Text style={tw`text-white text-base ml-2`}>{lastFour}</Text>}
    </View>
   
  </Pressable>
</View>
</ScrollView>
</View>
    

  </View>
  <View style={[tw`items-center border-t py-1 `,{borderColor:"#696868",backgroundColor:"#292828"}]}>
<OrderButton disabled={!lastFour} onPress={makePayment} title={`Place Order $${total}`} color={"green"} textColor={"white"} width={"90%"}/>
</View>
  </View>
  
  
  
  )
}


  return (
    <View style={[tw`flex-1`,{backgroundColor:"#0d0c0c"}]}>
      {allOrders.length === 0 ? <NoOrders/> : <Order/>}
  
    </View>
  )
}

export default OrderTab