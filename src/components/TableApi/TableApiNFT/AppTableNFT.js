import React, {useEffect, useState} from 'react';

const titles = ["#", "Coin", "Simbolo", "Plataformas"]

function AppTableNFT() {
  const [dataNft, setDataNft] = useState([]);
  const [search, setSearch] = useState('');

  const searcher = (e)=>{
    setSearch(e.target.value)
  }

  const results = !search 
  ? dataNft 
  : dataNft.filter((data)=> data.name.toLowerCase().includes(search.toLocaleLowerCase()))


  useEffect(() => {
    getDataNft()

  }, []);

  const getDataNft = () =>{
    fetch('https://api.coingecko.com/api/v3/nfts/list')
    .then((res) => res.json())
    .then(data => {
      //console.log(data)
      setDataNft(data)
    })
    .catch((err)=>console.log(err))
  }

  //console.log(dataNft)

  return (
    <div className='container'>

          <input 
            type= 'text' placeholder='Busqueda NFT' 
            className='form-control bg-dark text-light border-0 mt-4 text-center' 
            value={search} onChange={searcher} />

      <table className='table table-brand mt-4 table-hover'>
        <thead>
        <tr>
          {titles.map((title, index) => (
              <td key = {index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
            {results && results.map((data, index) =>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.symbol}</td>
                <td>{data.asset_platform_id}</td>
              </tr>
            ))}
        </tbody>
      </table>

  
    </div>
  );
}

export default AppTableNFT;
