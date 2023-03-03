import React, {useState, useEffect} from 'react'


const titles = ["#","Exchangen", "Puntuación de confianza","24h Volumen"]

function AppTableExchange() {
  const [dataExchange, setDataExchange] = useState([]);
  const [search, setSearch] = useState('');

  const searcher = (e)=>{
    setSearch(e.target.value)
  }

  const results = !search 
  ? dataExchange 
  : dataExchange.filter((data)=> data.name.toLowerCase().includes(search.toLocaleLowerCase()))


   useEffect(() => {
    getExchagen()
   }, []);


    const getExchagen = () => {
        fetch('https://api.coingecko.com/api/v3/exchanges')
        .then((res)=> res.json())
        .then(data =>{
            setDataExchange(data)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container'>

            <input 
            type= 'text' placeholder='Busqueda Exchange' 
            className='form-control bg-dark text-light border-0 mt-4 text-center' 
            value={search} onChange={searcher} />

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
  )
}

export default AppTableExchange