import React, { useState, useEffect } from 'react';

function NFTPrices() {
  const [nftPrices, setNftPrices] = useState([]);

  async function fetchNFTPrices() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/exchanges/list');
      const data = await response.json();
      setNftPrices(data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNFTPrices();
  }, []);

  return (
    <div>
      <h2>NFT Prices</h2>

      <img src={nftPrices.image} alt={nftPrices.name} style={{width: "2rem", margin: "0 0.5rem"}} />

      {nftPrices.length > 0 ? (
        <ul>
          {nftPrices.map(nft => (
            <li key={nft.id}>{nft.name}: {nft.current_price}</li>
          ))}
        </ul>
      ) : (
        <p>Loading NFT prices...</p>
      )}
    </div>
  );
}

export default NFTPrices;
