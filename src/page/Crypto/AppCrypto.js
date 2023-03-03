import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import NavBarr from '../../components/Nav/NavBarr'
import AppTableCrypto from '../../components/TableApi/TableApiCrypto/AppTableCrypto'


function Cryptocurrencies() {
  return (
    <div>
    <NavBarr/>
    <AppTableCrypto/>
    <AppFooter/>
    </div>
  )
}

export default Cryptocurrencies