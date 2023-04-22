import React from 'react'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableCrypto from '../../components/Table/TableApiCrypto/AppTableCrypto'
import CryptoLanding from './CryptoLanding'


function IndexCrypto() {
  return (
    <div>
    <NavBarr/>
    <CryptoLanding/>
    <AppTableCrypto/>
    </div>
  )
}

export default IndexCrypto