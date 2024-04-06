
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://159.65.31.191:4040/api/Auth/login';
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(url, formData);
      
      // Assuming the structure of the response based on the image you provided
      const loginResponse = response.data.loginResponse;

      // Store the token and token expiry date
      localStorage.setItem('authToken', loginResponse.token);
      // You might need to adjust the 'tokenExpiry' key based on your backend implementation if it exists
      // localStorage.setItem('tokenExpiry', loginResponse.expiryDate);

      // Store user details
      localStorage.setItem('userId', loginResponse.id);
      localStorage.setItem('firstName', loginResponse.firstName);
      localStorage.setItem('lastName', loginResponse.lastName);
      localStorage.setItem('email', loginResponse.email);
      localStorage.setItem('phoneNumber', loginResponse.phoneNumber);
      localStorage.setItem('role', loginResponse.role);
      localStorage.setItem('fullName', loginResponse.fullName);
      localStorage.setItem('accountType', loginResponse.accountType);
      localStorage.setItem('address', loginResponse.address);
      localStorage.setItem('city', loginResponse.city);
      localStorage.setItem('state', loginResponse.state);
      localStorage.setItem('walletId', loginResponse.walletId);
      localStorage.setItem('walletBalance', loginResponse.walletBalance);
      localStorage.setItem('ledgerAccountId', loginResponse.ledgerAccountId);
      localStorage.setItem('ledgerAccountBalance', loginResponse.ledgerAccountBalance);
      localStorage.setItem('usdAccountId', loginResponse.usdAccountId);
      localStorage.setItem('usdAccountBalance', loginResponse.usdAccountBalance);
      localStorage.setItem('cryptoKey', loginResponse.cryptoKey);
    

      // Navigate based on the user role
      navigate(loginResponse.role === 'Admin' ? '/admin' : '/user');
    } catch (error) {
      console.error('Login error:', error.response);
    }
  };
  return (
    <div className='min-h-screen bg-[#0f1b39]'>
      <div className='flex justify-center pt-40'>
        <div className='flex flex-col'>
          <div className='font-bold'>
            <h1 className='text-2xl font-bold mb-2 text-white text-center'>Enter your Login details</h1>
          </div>
          <div className='shadow-2xl bg-white border-dashed border-4 rounded-2xl h-[45vh] p-16'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-8'>
              <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                <FiMail className="text-black font-bold font-xl" />
                <input type="email" name='email' placeholder="Email" required className="pl-4 border-l-2 outline-none text-sm" />
              </div>
              <div className="flex items-center border-2 border-gray-200 rounded-full p-2">
                <RiLockPasswordLine className="text-black font-bold font-xl" />
                <input type="password" name='password' placeholder="Password" required className="pl-4 border-l-2 outline-none text-sm " />
              </div>
              <div>
                <button type='submit' className='font-medium hover:bg-white hover:text-black hover:border-black hover:border-2 bg-[#0f1b39] text-white rounded-lg p-3 w-full'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;