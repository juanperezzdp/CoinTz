import {useEffect, useState} from 'react'
import SpinnerDavidhu from '../../Spiner/SpinnerDavidhu';

const titles = ["#","Coin","Precio","Cambio de precio","24h Volumen"]

function AppTableMarkets(){

    const [coinsMarkets, setCoinsMarkets] = useState([]);
    const [search, setSearch] = useState('');
    const [outTime, setOutTime] = useState(true);

  const searcher = (e)=>{
    setSearch(e.target.value)
  }

  const results = !search 
  ? coinsMarkets 
  : coinsMarkets.filter((data)=> data.name.toLowerCase().includes(search.toLocaleLowerCase()))


    

    useEffect(()=>{

        const getMarkets = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
        .then((res)=> res.json())
        .then(data =>{
                setCoinsMarkets(data)
                setOutTime(false);
        })
        .catch((err)=>{throw err})
    }

        getMarkets()
    }, [])

    return(
        <div className='container'>

            <input 
            type= 'text' placeholder='Busqueda Coins' 
            className='form-control bg-dark text-light border-0 mt-4 text-center' 
            value={search} onChange={searcher} />

        {outTime 
        ? (
            <SpinnerDavidhu/>
        ):(
        <table className='table table-brand mt-4 table-hover mg-3'>
            <thead>
        <tr>
            {titles.map((title, index) => (
                <td key = {index}>{title}</td>
            ))}
        </tr>
        </thead>
        <tbody>
            {results && results.map((data, index) =>(
                <tr key = {index}>

            <td>
            <span>
                {index}
            </span>
                <img src={data.image} alt={data.name} style={{width: "2rem", margin: "0 0.5rem"}} />
            </td>

            <td>{data.name}</td>

            <td>{data.current_price}</td>

            <td className={data.price_change_percentage_24h > 0 
            ? 'text-success' 
            : 'text-danger'}>
            {data.price_change_percentage_24h}
        </td>
        <td>{data.total_volume}</td>
            </tr>
            ))}
        </tbody>
    </table>
    )}
    </div>
    )
}
export default AppTableMarkets;