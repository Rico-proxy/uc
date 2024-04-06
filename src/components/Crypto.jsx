import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoPrices = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets');
        setCryptos(response.data.data.slice(0, 6)); // Limit to the first 10 results for display
      } catch (error) {
        console.error('There was an error fetching the crypto prices:', error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 text-white">
      <h1 className="text-2xl font-bold my-4">Cryptocurrency Prices</h1>
      <div className="w-full">
        {cryptos.map(crypto => {
          // Calculate if the price is up or down and assign color accordingly
          const priceChangeColor = parseFloat(crypto.changePercent24Hr) >= 0 ? 'text-green-500' : 'text-red-500';

          return (
            <div key={crypto.id} className="space-y-2 space-x-4 flex flex-col md:flex-row justify-between items-center py-2 border-b">
              <span className="text-sm font-semibold">{crypto.name} ({crypto.symbol})</span>
              <span>{`$${parseFloat(crypto.priceUsd).toFixed(2)}`}</span>
              <span className={`${priceChangeColor} font-semibold`}>
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoPrices;
