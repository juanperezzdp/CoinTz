import React from 'react'

export const CoinRow = ({coin, index}) => {

  return (
      <tr key = {coin.index}>
          <td>
            <span>
              {index}
            </span>
            <img src={coin.image} alt={coin.name} style={{width: "2rem", margin: "0 0.5rem"}} />
        </td>
        <td>{coin.name}
          <span className='ms-2 text-muted text-uppercase'>{coin.symbol}</span>
        </td>
        <td>{coin.current_price}</td>
        <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
          {coin.price_change_percentage_24h}
        </td>
          <td>{coin.total_volume}</td>
      </tr>
    
  )
}
