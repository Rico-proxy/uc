import React from 'react';

const RecentTrades = () => {
  const trades = [
    { id: '126515', time: '17.24AM', status: 'complete', trade: '+ 0.00113 BTC' },
    { id: '123675', time: '18.14AM', status: 'pending', trade: '+ 3.90244 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    { id: '126515', time: '20.25AM', status: 'pending', trade: '- 0.00121 LTC' },
    // Add more trades as needed...
  ];

  return (
    <div className="border-l-2 border-[#0f1b39] w-[170vh] ">
      <table className="w-full text-sm text-left text-black">
        <caption className="p-5 text-lg font-semibold text-left  bg-[#0f1b39] text-white">
          Recent trading activities
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">Type of Transfer</th>
            <th scope="col" className="py-3 px-6">Date</th>
            <th scope="col" className="py-3 px-6">Status</th>
            <th scope="col" className="py-3 px-6">Amount</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id} className="bg-white border-b">
              <td className="py-4 px-6">Deal number {trade.id}</td>
              <td className="py-4 px-6">{trade.time}</td>
              <td className="py-4 px-6">{trade.status}</td>
              <td className="py-4 px-6">{trade.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTrades;
