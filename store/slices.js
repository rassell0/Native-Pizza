import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
name:"slice",
initialState:{
    ids:[],
    account:{},
    address:"",
    signedIn:false,
    orders:[],
    toggle:true
},
reducers:{
    createAccount:(state,action)=>{
state.account = action.payload
    },
    toggleSignin:(state,action)=>{
    state.signedIn = action.payload
},
setAddress:(state,action)=>{
state.address = action.payload
},
addOrder:(state,action)=>{
state.orders = [...state.orders,action.payload]
},
deleteAllOrders:(state,action)=>{
    state.orders = action.payload
}
}
})

export const createAccount = slices.actions.createAccount
export const toggleSignin = slices.actions.toggleSignin
export const setAddress = slices.actions.setAddress
export const addOrder = slices.actions.addOrder
export const deleteAllOrders = slices.actions.deleteAllOrders

export default slices.reducer