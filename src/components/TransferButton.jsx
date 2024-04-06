import React from 'react'

const TransferButton = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter Amount" />
        <input type="text" placeholder="Enter Wallet Address" />
        <input type="note" placeholder='enter note' />
        <select>
          <option value="0">BTC</option>
          <option value="1">ETH</option>
          <option value="2">LTC</option>
        </select>
      </form>
    </div>
  )
}

export default TransferButton