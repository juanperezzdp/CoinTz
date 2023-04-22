import React from 'react'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableExchange from '../../components/Table/TableApiExchange/AppTableExchange'
import ExchangeLanding from './ExchangeLanding'
import IndexFooter from '../../components/Footer/IndexFooter'
function IndexExchange() {
  return (
    <div>
    <NavBarr/>
    <ExchangeLanding/>
    <AppTableExchange/>
    <IndexFooter/>
    </div>
  )
}

export default IndexExchange
