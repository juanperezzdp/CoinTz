import React, {useState} from 'react'
import './ModalStyle.scss'
import { XLg } from 'react-bootstrap-icons';

function TableDatail({dataC}) {
  const [showModal, setShowModal] = useState(true);

    function closeModal() {
      setShowModal(false);
    }

  return (
    <div className='body'>
    {showModal ?(
  <div className='modal'>
    <div className='back'>
    <h3>{dataC.symbol.toUpperCase()}</h3>
    <img src={dataC.image} alt="IMG" />
    
    </div>

    <div className='datail'>
        <span onClick={closeModal} className='xlg'><XLg/></span>
        <h1>{dataC.name}</h1>
        <h5>{dataC.symbol.toUpperCase()}</h5>
        <hr />
        <h2>{dataC.current_price}</h2>
        <p>Precios</p>
        <h4 className={dataC.price_change_percentage_24h > 0 
            ? 'text-success' 
            : 'text-danger'}>
            {dataC.price_change_percentage_24h}</h4>
        <p>Market Cap</p>
        <h4>{dataC.total_volume}</h4>
        <p>Volume</p>
    </div>
    </div>)
    :(null)}
    </div>
  )
}

export default TableDatail