import React from 'react'
import Dapp from '../../img/home_dapps.png'
import '../Landing.scss'


function NftLanding() {

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
        <img className="ig" src={Dapp} alt={Dapp}/>
    <div className="text-t">
<h1>Non Fungible Token</h1>
<p>Colecciones de NFT enumeradas por volumen de ventas.</p>
<button type="button" onClick={handleScroll} className="btn btn-outline-secondary">
    Click para ver capitaliazacion
    <i className="bi bi-arrow-right-circle"></i>
</button>
</div>
</div>
</section>

)
}

export default NftLanding