import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AccountTabLoggedIn from './AccountTabLoggedIn'
import AccountTabNotLoggedIn from './AccountTabNotLoggedIn'

const AccountTab = () => {

const isLoggedIn = useSelector((state)=> state.slices.signedIn)

  return (
    <>
    {isLoggedIn ? <AccountTabLoggedIn/> : <AccountTabNotLoggedIn />}
 
    </>
  )
}

export default AccountTab