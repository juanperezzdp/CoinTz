import React from 'react'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableNFT from '../../components/Table/TableApiNFT/AppTableNFT'
import NftLanding from './NftLanding'

function IndexNft() {
  return (
    <div>
    <NavBarr/>
        <NftLanding/>
        <AppTableNFT/>
    </div>
  )
}

export default IndexNft