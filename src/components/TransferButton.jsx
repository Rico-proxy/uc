import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const TransferButton = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const displayFormAfterToast = useCallback(() => {
    setShowForm(true);
  }, []);

  const handleTransferClick = () => {
    const sendTransferCode = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Code sent");
      }, 1500);
    });

    toast.promise(
      sendTransferCode,
      {
        loading: 'Sending transfer code to your email...',
        success: () => {
          displayFormAfterToast();
          return 'Transfer code sent successfully!';
        },
        error: 'Failed to send transfer code.',
      }
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <button
        className="text-black text-[15px]"
        onClick={handleTransferClick}
      >
        Initiate
      </button>

      {showForm && (
        <div className="fixed  inset-0 bg-[#0f1b39] z-50 flex justify-center items-center">
          
          <div ref={formRef} className="bg-white shadow-2xl p-6 rounded  w-[400px] text-[16px]">
            
            <form className="flex flex-col space-y-4">
              <input type="text" placeholder="Name of the sender" className="text-[16px] border border-gray-300 p-2 rounded" />
              <select className="border border-gray-300 p-2 rounded">
                <option>Select account</option>
                {/* Add account options here */}
              </select>
              <input type="text" placeholder="Wallet of receiver" className="border border-gray-300 p-2 rounded" />
              <textarea placeholder="Note" className="border border-gray-300 p-2 rounded"></textarea>
              <input type="number" placeholder="Amount" className="border border-gray-300 p-2 rounded" />
              <input type="text" placeholder="Transfer code" className="border border-gray-300 p-2 rounded" />
              <input type="password" placeholder="PIN" className="border border-gray-300 p-2 rounded" />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Submit Transfer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferButton;
