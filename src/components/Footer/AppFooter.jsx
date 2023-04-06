import React from 'react'
import { Link } from 'react-router-dom'
import { Apple, Facebook, Github, GooglePlay } from 'react-bootstrap-icons';
import '../Footer/FooterSass.scss'
import Logo from '../../img/LogoName.png'

function AppFooter() {
  return (
    < div className='containerfooter'>
    <div className='icons'>
        <img style={{width: "8rem"}} src={Logo} alt="logo" />
        <div>
        <Link to='https://www.apple.com/es/store' className='linkIcons' target="_blank" ><Apple/></Link>
        <Link to='https://www.facebook.com/' className='linkIcons' target="_blank" ><Facebook/></Link>
        <Link to='https://github.com/juanperezzdp/CoinTz' className='linkIcons' target="_blank" ><Github/></Link>
        <Link to='https://play.google.com/store/games?hl=es_419&gl=US' className='linkIcons' target="_blank" ><GooglePlay/></Link>
        </div>
    </div>

        <ul>
           <li><a href='/Cryptocurrencies'>CryptoMonedas</a></li>
            <p>Precios de criptomonedas de hoy por capitalización de mercado</p>
        </ul>

        <ul>
        <li><a href='/Exchange'>Exchange</a></li> 
            <p>Principales intercambios de Exchange en criptomonedas y su capitalización </p>
        </ul>

        <ul>
            <li><a href='/Nft'>NFT</a></li> 
            <p>Colecciones de NFT enumeradas por volumen de ventas</p>
        </ul>
    </div>
  )
}

export default AppFooter