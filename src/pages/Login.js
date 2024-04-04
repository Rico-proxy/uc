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
      
      // Store the token and token expiry date
      localStorage.setItem('authToken', response.data.token.token);
      localStorage.setItem('tokenExpiry', response.data.token.expiryDate);

      // Extract and store user details from userResponse
      const userDetails = response.data.userResponse;

      localStorage.setItem('userId', userDetails.id);
      localStorage.setItem('firstName', userDetails.firstName);
      localStorage.setItem('lastName', userDetails.lastName);
      localStorage.setItem('email', userDetails.email);
      localStorage.setItem('phoneNumber', userDetails.phoneNumber);
      localStorage.setItem('role', userDetails.role);
      localStorage.setItem('fullName', userDetails.fullName);
      localStorage.setItem('accountType', userDetails.accountType);
      localStorage.setItem('address', userDetails.address);
      localStorage.setItem('city', userDetails.city);
      localStorage.setItem('state', userDetails.state);
      localStorage.setItem('walletId', userDetails.walletId);
      localStorage.setItem('walletBalance', userDetails.walletBalance);

      // Navigate based on the user role
      navigate(userDetails.role === 'Admin' ? '/admin' : '/user');
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
