import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import NavBarr from '../../components/Nav/NavBarr'
import AppTableNFT from '../../components/TableApi/TableApiNFT/AppTableNFT'
import NftLanding from './NftLanding'

function Nft() {
  return (
    <div>
    <NavBarr/>
        <NftLanding/>
        <AppTableNFT/>
        <AppFooter/>
    </div>
  )
}

export default Nft