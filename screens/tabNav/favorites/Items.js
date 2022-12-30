import { View, Text,Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ItemsLoggedIn from './ItemsLoggedIn'
import ItemsNotLoggedIn from './ItemsNotLoggedIn'

const Items = () => {
  const isLoggedIn = useSelector((state)=> state.slices.signedIn)
  return (
    <> 
    {isLoggedIn ? <ItemsLoggedIn/>: <ItemsNotLoggedIn/>}
    </>
  )
}

export default Items