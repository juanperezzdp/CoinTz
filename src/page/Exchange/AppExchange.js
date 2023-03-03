import React from 'react'
import AppFooter from '../../components/Footer/AppFooter'
import NavBarr from '../../components/Nav/NavBarr'
import AppTableExchange from '../../components/TableApi/TableApiExchange/AppTableExchange'
function Products() {
  return (
    <div>
    <NavBarr/>
    <AppTableExchange/>
    <AppFooter/>
    </div>
  )
}

export default Products