import React from 'react'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableNFT from '../../components/Table/TableApiNFT/AppTableNFT'
import NftLanding from './NftLanding'
import IndexFooter from '../../components/Footer/IndexFooter'

function IndexNft() {
  return (
    <div>
    <NavBarr/>
        <NftLanding/>
        <AppTableNFT/>
        <IndexFooter/>
    </div>
  )
}

export default IndexNft