import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableCrypto from '../../components/Table/TableApiCrypto/AppTableCrypto'
import CryptoLanding from './CryptoLanding'


function Cryptocurrencies() {
  return (
    <div>
    <NavBarr/>
    <CryptoLanding/>
    <AppTableCrypto/>
    <AppFooter/>
    </div>
  )
}

export default Cryptocurrencies