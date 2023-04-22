import React from 'react'
import { Link } from 'react-router-dom'
import HomeHero from '../../img/home_hero.png';
import AppStore from '../../img/app-store.com.png';
import PlayStore from '../../img/play-store1.png';
import Arrow from '../../img/icons8-derecha-en-círculo-2-50.png';
import Movil from '../../img/home_dapps.png';
import '../../page/Landing.scss'

function HomeLanding() {

  function handleScroll() {
    const element = document.getElementById("table");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className='header'>
        <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
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


              <h1 className="title-home">Precios de criptomonedas de hoy por capitalización del mercado.</h1>
              <p className="p-home">Obtén información actualizada al instante sobre los precios de criptomonedas y toma decisiones informadas para maximizar tus inversiones financieras.</p>
              <Link to='https://www.apple.com/es/store' target="_blank"><img className="store" src={AppStore} alt=""/></Link>
              <Link to='https://play.google.com/store/games?hl=es_419&gl=US' target="_blank"><img className="store" src={PlayStore} alt=""/></Link>
            </div>

            <div style={{cursor: 'pointer'}} onClick={handleScroll} className="containeArrow">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>

            <div className="img-p" >
            <img style={{zIndex: '1', height: '31rem'}} src={HomeHero} alt="Movil"/>
            {/* <video autoPlay loop  style={{width: '14rem', position: 'absolute', marginLeft: '0.5rem', borderRadius: '2rem', marginTop: '1rem' }}>
            <source src={require("../../img/11_cambiarPIN.mp4")} type="video/mp4" />
            </video> */}
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