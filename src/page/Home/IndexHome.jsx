import React from 'react'
import Profile from '../../components/Login/Profile'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableMarkets from '../../components/Table/TableApiMarke/AppTableMarkets'
import HomeLanding from './HomeLanding'
function IndexHome() {
  return (
    <>
    <NavBarr/>
    <HomeLanding/>
    <Profile/>
    <AppTableMarkets/>
    </>
  )
}

export default IndexHome