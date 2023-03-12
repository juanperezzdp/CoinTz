import React from 'react'
import { Link } from 'react-router-dom'
import HomeHero from '../../img/PhoneS.png';
import AppStore from '../../img/app-store.com.png';
import PlayStore from '../../img/play-store1.png';
import Arrow from '../../img/icons8-derecha-en-círculo-2-50.png';
import Movil from '../../img/home_dapps.png';
import '../../page/Landing.scss'

function HomeLanding() {
  return (
    <header className='header'>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
<section className="sec-home">
    <div className="home-cta">

        <div className="cta-text"> 

            <div className='title'>

            <div className='ob'>
              <span>Market Cap
                <img className="icon" src={Arrow} alt="Wallet"/>
              </span>
              </div>


              <h1 className="title-home">Precios de criptomonedas de hoy por capitalización del mercado</h1>
              <p className="p-home">Obtén información actualizada al instante sobre los precios de criptomonedas y toma decisiones informadas para maximizar tus inversiones financieras.</p>
              <Link to='/nft'><img className="store" src={AppStore} alt=""/></Link>
              <Link to='https://www.youtube.com/watch?v=A0oD0dl48IM'><img className="store" src={PlayStore} alt=""/></Link>
            </div>

            <div className="containeArrow">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>

            <div className="img-p" >
            <img src={HomeHero} alt="Movil"/>
            </div>
            <div>
            <img className="img-pp"src={Movil} alt="Movil" />
            </div>
            
            
        </div>

        </div>
</section>
</header>  
  )
}

export default HomeLanding