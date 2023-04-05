import React from 'react';
import ImgExchange from '../../img/home_security.png'
import '../Landing.scss'


function CryptoLanding() {

function handleScroll() {
  const element = document.getElementById("table");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}



return (
<section className='header'>
        <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
        </div>

    <div className=" intro1">
        <img className="ig" src={ImgExchange} alt="Img"/>
    <div className="text-t">
        <h1>CryptoMonedas</h1>
            <p>Precios de criptomonedas de hoy por capitalización de mercado.</p>
        <button type="button" onClick={handleScroll} className='btn btn-outline-secondary'>
            Click para ver capitaliazacion
            <i className="bi bi-arrow-right-circle"></i>
        </button>
    </div>
    </div>
</section>
)
}

export default CryptoLanding