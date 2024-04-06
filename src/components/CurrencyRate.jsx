import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyRate = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/rates');
        setRates(response.data.data.slice(0, 9)); // Limit to the first 10 results for display
      } catch (error) {
        console.error('There was an error fetching the currency rates:', error);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-black my-4">Currency Rates</h1>
      <div className="w-full">
        {rates.map((rate, index) => (
          <div key={rate.id} className="flex flex-col md:flex-row justify-between items-center py-2 border-b border-gray-200">
            <span className="text-lg font-semibold black">{rate.symbol}</span>
            <span className="text-black">{`${parseFloat(rate.rateUsd).toFixed(2)} USD`}</span>
            <span className="text-black font-medium">{rate.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyRate;
