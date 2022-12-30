import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const APIKEY = "AIzaSyAhjqzTPENldOJ3pdgeEbjZh2HyHH-myv4"

export async function login(email , password){
    try{
    const response =  await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + APIKEY,
    {
        email,
        password,
        returnSecureToken:true
    })

    AsyncStorage.setItem("token", email)
    return true
    }catch(err){
Alert.alert("Error", "Invalid Email or password")
    }
    


}


export async function createUser(email,password){
const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + APIKEY,
{
    email,
    password,
    returnSecureToken:true
})
AsyncStorage.setItem("token", response.data.idToken)

}


export async function saveUser(data){
const info = await axios.post("https://pizza-6bc71-default-rtdb.firebaseio.com/accounts.json",
    data
)
}

export async function getUser(){
    const info = await axios.get("https://pizza-6bc71-default-rtdb.firebaseio.com/accounts.json")
    return info.data
}

export async function addToFavorite(name,meal){
    const favorite = await axios.post("https://pizza-6bc71-default-rtdb.firebaseio.com/accounts/" + name + "/favorites.json",
    meal
    )
}

export function removeFavorite(name,meal){
    return axios.delete("https://pizza-6bc71-default-rtdb.firebaseio.com/accounts/" + name + "/favorites/" + meal + ".json" )
}

export async function checkFav(name){
    const check = await axios.get("https://pizza-6bc71-default-rtdb.firebaseio.com/accounts/" + name + "/favorites.json")
   return check.data
}


export async function getData(){
    const response = await axios.get("https://pizza-6bc71-default-rtdb.firebaseio.com/categories.json")
    const categories = []
    for(const name in response.data){
        const category = []
       for(const food in response.data[name]){
        const foods = {
            id:name,
            calories:response.data[name][food].calories,
            description:response.data[name][food].description,
            name:response.data[name][food].name,
            price:response.data[name][food].price,
            slices: response.data[name][food].slices,
            uri:response.data[name][food].uri
        }
        category.push(foods)
       }
       categories.push(category)
    }
 
 return categories
}

