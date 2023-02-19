import React from 'react'
import { CoinRow } from './CoinRow'

const titles = ["#", "Coin", "Precio", "Cambio de precio", "24h Volumen"]

const Table = ({coins, search}) => {

  const filterCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) |
    coin.symbol.toLowerCase().includes(search.toLowerCase()))
    

  return (
    <table className='table table-brand mt-4 table-hover'>
        <thead>
          <tr>
          {titles.map((title, index) => (
              <td key = {index}>{title}</td>
            ))
            
          }
          </tr>
        </thead>
        <tbody>
          {filterCoins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1}/>
          ))}
        </tbody>
    </table>
  )
}

export default Table