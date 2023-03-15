import React from 'react'
import Dapp from '../../img/home_dapps.png'
import '../Landing.scss'


function NftLanding() {
  return (
    
<section className='header'>
        <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
        </div>

    <div className=" intro1">
        <img className="ig" src={Dapp} alt={Dapp}/>
    <div className="text-t">
<h1>Navegador para App</h1>
<p>Use sus aplicaciones descentralizadas favoritas o encuentre otras nuevas sin salir de la aplicación.</p>
<button type="button" className="btn btn-outline-secondary">Descarga la App
    <i className="bi bi-arrow-right-circle"></i>
</button>
</div>
</div>
</section>

)
}

export default NftLanding