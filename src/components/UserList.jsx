import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [walletType, setWalletType] = useState('0');
  const [isCredit, setIsCredit] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://159.65.31.191:4040/api/Admin/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBalanceUpdate = async (event) => {
    event.preventDefault();
    const action = isCredit ? 'credit-user' : 'debit-user';
    const endpoint = `http://159.65.31.191:4040/api/Admin/${action}`;
    try {
      const response = await axios.post(endpoint, {
        userId: selectedUser,
        amount: parseFloat(amount),
        walletType: parseInt(walletType, 10),
      });
      console.log(`${isCredit ? 'Credit' : 'Debit'} Success:`, response.data);
      fetchUsers();
    } catch (error) {
      console.error(`Failed to ${isCredit ? 'credit' : 'debit'} user:`, error);
    } finally {
      resetForm();
    }
  };

  const openBalanceForm = (user, credit) => {
    setSelectedUser(user.id);
    setIsCredit(credit);
    setAmount('');
    setWalletType('0');
  };

  const resetForm = () => {
    setSelectedUser(null);
    setAmount('');
    setWalletType('0');
    setIsCredit(true);
  };

  const filteredUsers = searchQuery
    ? users.filter(
        user =>
          user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (user.middleName && user.middleName.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : users;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <input
        type="text"
        placeholder="Search by full name or middle name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="overflow-x-auto bg-[#0f1b39] text-white">
        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Password</th>
              <th className="px-6 py-3">Pin</th>
              <th className="px-6 py-3">Ledger Account Balance</th>
              <th className="px-6 py-3">USD Account Balance</th>
              <th className="px-6 py-3">Wallet Balance</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50 hover:text-black">
                <td className="px-6 py-4">{user.fullName}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4">{user.pin}</td>
                <td className="px-6 py-4">{user.ledgerAccountBalance}</td>
                <td className="px-6 py-4">{user.usdAccountBalance}</td>
                <td className="px-6 py-4">{user.walletBalance}</td>
                <td className="px-6 py-4">
                  {selectedUser === user.id ? (
                    <form onSubmit={handleBalanceUpdate} className="flex items-center space-x-2">
                      <input
                        type="number"
                        placeholder="Amount"
                        step="0.01"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded"
                      />
                      <select value={walletType} onChange={e => setWalletType(e.target.value)} required className="border border-gray-300 p-2 rounded">
                        <option value="0">USD Account</option>
                        <option value="1">Ledger Account</option>
                        <option value="2">Wallet Account</option>
                      </select>
                      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">{isCredit ? 'Credit' : 'Debit'}</button>
                      <button type="button" onClick={resetForm} className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400">Cancel</button>
                    </form>
                  ) : (
                    <div className="flex space-x-2">
                      <button onClick={() => openBalanceForm(user, true)} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Credit</button>
                      <button onClick={() => openBalanceForm(user, false)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Debit</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
