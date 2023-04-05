import React from 'react'
import Dex from '../../img/home_dex.png'
import '../Landing.scss'
function ExchangeLanding() {

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
        <img className="ig" src={Dex} alt="Movil"/>
    <div className="text-t">
        <h1>Exchange</h1>
            <p>Principales intercambios de Exchange en criptomonedas y su capitalización.</p>
        <button type="button" onClick={handleScroll} className='btn btn-outline-secondary'>
            Click para ver capitaliazacion
            <i className="bi bi-arrow-right-circle"></i>
        </button>
    </div>
    </div>
</section>
)
}

export default ExchangeLanding