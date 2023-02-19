import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import NavBarr from '../../components/Nav/NavBarr'
import AppTable from '../../components/TableApi/AppTable'
import HomeLanding from './HomeLanding'
function Home() {
  return (
    <>
    <NavBarr/>
    <HomeLanding/>
    <AppTable/>
    <AppFooter/>
    </>
  )
}

export default Home