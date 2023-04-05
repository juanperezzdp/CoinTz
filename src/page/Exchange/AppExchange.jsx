import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import NavBarr from '../../components/NavBar/NavBarr'
import AppTableExchange from '../../components/Table/TableApiExchange/AppTableExchange'
import ExchangeLanding from './ExchangeLanding'
function Products() {
  return (
    <div>
    <NavBarr/>
    <ExchangeLanding/>
    <AppTableExchange/>
    <AppFooter/>
    </div>
  )
}

export default Products
