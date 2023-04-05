import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import Profile from '../../components/Login/Profile'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableMarkets from '../../components/Table/TableApiMarke/AppTableMarkets'
import HomeLanding from './HomeLanding'
function Home() {
  return (
    <>
    <NavBarr/>
    <HomeLanding/>
    <Profile/>
    <AppTableMarkets/>
    <AppFooter/>
    </>
  )
}

export default Home