import React, {useState, useEffect} from 'react'
import SpinnerDavidhu from '../../Spiner/SpinnerDavidhu';




const titles = ["#","","Exchangen", "Puntuación de confianza","24h Volumen"]

function AppTableExchange() {
  const [dataExchange, setDataExchange] = useState([]);
  const [search, setSearch] = useState('');
  const [outTime, setOutTime] = useState(true);

  const searcher = (e)=>{
    setSearch(e.target.value)
  }

  const results = !search 
  ? dataExchange 
  : dataExchange.filter((data)=> data.name.toLowerCase().includes(search.toLocaleLowerCase()))


  useEffect(() => {
    const getExchagen = () => {
        fetch('https://api.coingecko.com/api/v3/exchanges')
        .then((res)=> res.json())
        .then(data =>{
            setDataExchange(data)
            setOutTime(false);
        })
        .catch((err)=>{throw err})
    }
    
    getExchagen()
  }, []);

  return (
    <div className='container'>

            <input 
            id='table'
            type= 'text' placeholder='Busqueda Exchange' 
            className='form-control bg-dark text-light border-0 mt-4 text-center' 
            value={search} onChange={searcher} />

{outTime ? (
            <SpinnerDavidhu/>
        ):(
        <div className="table-responsive">
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
                <tr
                style={{cursor: "pointer"}} 
                key={index}>

            <td>{index +1}</td>
            <td><img src={data.image} alt={data.name} style={{width: "1.5rem", borderRadius: '50%'}} /></td>
            <td>{data.name}</td>
            <td>{data.trust_score}</td>

            <td className=
            {data.trade_volume_24h_btc > 0 ? 'text-success' : 'text-danger'}>
            {data.trade_volume_24h_btc}
            </td>
            </tr>
            ))}
            
        </tbody>
      </table>
      </div>
      )}
    </div>
  )
}

export default AppTableExchange