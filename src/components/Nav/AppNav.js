import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarr from './NavBarr';
import Home from '../../page/Home/AppHome'
import Cryptocurrencies from '../../page/Cryptocurrencies'
import NFT from '../../page/NFT/Nft'
import Products from '../../page/Products'


function AppNav() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
        
            <Route path='/' element={<NavBarr/>} />
            <Route index element={<Home/>} />
            <Route path='cryptocurrencies' element={<Cryptocurrencies/>} />
            <Route path='nft' element={<NFT/>} />
            <Route path='Products' element={<Products/>} />
        
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default AppNav