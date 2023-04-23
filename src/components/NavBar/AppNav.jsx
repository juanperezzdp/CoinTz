import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarr from './NavBarr';
import Home from '../../page/Home/AppHome'
import Cryptocurrencies from '../../page/Crypto/AppCrypto'
import AppNFT from '../../page/NFT/AppNft'
import Exchange from '../../page/Exchange/AppExchange'
import AppFooter from '../Footer/AppFooter';


function AppNav() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
            
            <Route  path='/nft' element={<AppNFT/>} />
            <Route  path='/exchange' element={<Exchange/>} />
            <Route  path='/cryptocurrencies' element={<Cryptocurrencies/>} />
            <Route  path='/' element={<NavBarr/>} />
            <Route index element={<Home/>} />

    </Routes>
    <AppFooter/>
    </BrowserRouter>
    </div>
  )
}

export default AppNav