import React from 'react'
import Dex from '../../img/home_dex.png'
import '../Exchange/Exchange.scss'
import '../Landing.scss'
function ExchangeLanding() {
return (
<section className='header'>
        <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
        </div>

    <div className=" intro1">
        <img className="ig" src={Dex} alt="Movil"/>
    <div className="text-t">
        <h1>Intercambio</h1>
            <p>Sin formularios, ni selfies. Intercambie criptomonedas en cualquier momento con facilidad.</p>
        <button type="button" className='btn btn-outline-secondary'>Haz tu primer transacción
            <i className="bi bi-arrow-right-circle"></i>
        </button>
    </div>
    </div>
</section>
)
}

export default ExchangeLanding