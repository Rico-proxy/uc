import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionActivity = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://159.65.31.191:4040/api/Admin/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction Log</h2>
      <div className="overflow-hidden bg-[#0f1b39] text-white">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Timestamp</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Sender ID</th>
              <th className="px-6 py-3">Sender Email</th>
              <th className="px-6 py-3">Receiver Email</th>
              <th className="px-6 py-3">Details</th>
              <th className="px-6 py-3">Receiver Wallet Address</th>
              <th className="px-6 py-3">Wallet Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 hover:text-black">
                <td className="px-6 py-4">{new Date(transaction.timestamp).toLocaleString()}</td>
                <td className="px-6 py-4">{transaction.amount}</td>
                <td className="px-6 py-4">{transaction.status}</td>
                <td className="px-6 py-4">{transaction.type}</td>
                <td className="px-6 py-4">{transaction.senderId}</td>
                <td className="px-6 py-4">{transaction.senderEmail}</td>
                <td className="px-6 py-4">{transaction.receiverEmail || 'N/A'}</td>
                <td className="px-6 py-4">{transaction.details}</td>
                <td className="px-6 py-4">{transaction.receiverWalletAddress}</td>
                <td className="px-6 py-4">{transaction.walletType || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionActivity;
