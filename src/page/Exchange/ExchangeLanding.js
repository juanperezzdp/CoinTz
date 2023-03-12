import React from 'react'
import Dex from '../../img/home_dex.png'
import '../Exchange/Exchange.scss'
import '../Landing.scss'
function ExchangeLanding() {
return (
<section className='header'>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>

    <div class=" intro1">
        <img class="ig" src={Dex} alt="Movil"/>
    <div class="text-t">
        <h1>Intercambio</h1>
            <p>Sin formularios, ni selfies. Intercambie criptomonedas en cualquier momento con facilidad.</p>
        <button type="button" class="btn btn-outline-secondary">Haz tu primer transacción
            <i class="bi bi-arrow-right-circle"></i>
        </button>
    </div>
    </div>
</section>
)
}

export default ExchangeLanding