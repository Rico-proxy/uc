import React, { useState, useRef, useEffect } from 'react';
import { BiEnvelope, BiBitcoin } from "react-icons/bi";
import { BsBell, BsBoxArrowInDownLeft } from "react-icons/bs";
import Button from '../components/Button';
import TimeBasedGreeting from '../components/Time';
import { AiOutlineSend } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import Chart from '../components/Chart';
import Copy from '../components/Copy';
import Crypto from '../components/Crypto';
import Trade from '../components/Trade';
import Calender from '../components/MyCalender';
import { IoIosArrowDown } from "react-icons/io";
import SafeDeals from '../components/SafeDeals';
import Form from '../components/Form';
import Transfer from '../components/Transfer';
import WalletAddress from '../components/WalletAddress';
import CurrencyRate from '../components/CurrencyRate';
import Pin from '../components/Pin';
import Slide from '../components/Slide';
const User = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    role: '',
    fullName: '',
    accountType: '',
    address: '',
    city: '',
    state: '',
    walletId: '',
    walletBalance: '',
    ledgerAccountId: '',
    ledgerAccountBalance: '',
    usdAccountId: '',
    usdAccountBalance: '',
    userId: '',
    ledgerAccountNumber: '',
    // ... add other user properties as needed
  });

  useEffect(() => {
    // Assuming user information is stored in localStorage
    const userInformation = {
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      middleName: localStorage.getItem('middleName'),
      userName: localStorage.getItem('userName'),
      email: localStorage.getItem('email'),
      phoneNumber: localStorage.getItem('phoneNumber'),
      role: localStorage.getItem('role'),
      fullName: localStorage.getItem('fullName'),
      accountType: localStorage.getItem('accountType'),
      address: localStorage.getItem('address'),
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
      walletId: localStorage.getItem('walletId'),
      walletBalance: localStorage.getItem('walletBalance'),
      ledgerAccountId: localStorage.getItem('ledgerAccountId'),
      ledgerAccountBalance: localStorage.getItem('ledgerAccountBalance'),
      usdAccountId: localStorage.getItem('usdAccountId'),
      usdAccountBalance: localStorage.getItem('usdAccountBalance'),
      cryptoKey: localStorage.getItem('cryptoKey'),
      userId: localStorage.getItem('userId'),
      ledgerAccountNumber: localStorage.getItem('ledgerAccountNumber'),
      // ... add other fields as needed
    };

    // Update the state with the retrieved information
    setUserInfo(userInformation);
  }, []);
  

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownVisible(prev => !prev);

  // Effect for handling clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  return (
    <div className='min-h-screen text-white'>
      <header className="h-16 fixed w-full bg-[#0f1b39] ">
        <div className='flex flex-row justify-between items-center text-center py-2 px-4 z-40'>
            <div className='flex flex-row items-center text-center space-x-5 '>
                <div>
                  <Button/>
                </div>
            </div>
            <div className='flex flex-row items-center space-x-4 relative' ref={dropdownRef}>
              <div>
                <BsBell className='text-xl'/>
              </div>
              <button className='flex flex-row items-center' onClick={toggleDropdown}>
                <p>{userInfo.fullName}</p>
                <IoIosArrowDown className='text-xl'/>
              </button>
              {/* Dropdown Menu */}
              {isDropdownVisible && (
                <div className='absolute top-6 right-5 bg-[#0f1b39] text-white p-2 rounded shadow '>
                  <ul>
                    <li className='hover:bg-gray-700 p-2 cursor-pointer'>Profile</li>
                    <li className='hover:bg-gray-700 p-2 cursor-pointer'>Settings</li>
                  </ul>
                </div>
                )}
              </div>
        </div>
      </header>
          <main className='px-20 pb-20 flex flex-col text-black pt-24 bg-slate-200 min-h-screen'>
                  <Slide/>
                <section className='flex flex-col '>
                        <div className='text-black text-2xl font-bold flex flex-row justify-between items-center '>
                           <div className='flex flex-row space-x-3 '>
                           <TimeBasedGreeting/>, 
                           <span>{userInfo.fullName}</span> 
                            </div>
                            <Form/>
                            <div>
                              <p className='text-xl'>ledgerAccountNumber</p>
                              
                              <Copy/>
                            </div>
                            
                         </div>
                         
                        <div className='grid grid-cols-3 justify-center pt-20'>
                            <card className='  rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6  bg-[#0f1b39] text-white'>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl text-white'>
                                             <p>{userInfo.accountType}</p>
                                            <p>{userInfo.usdAccountBalance}</p>
                                            
                                      </div>
                                      
                                  </div>
                            </card>
                            <card className='   rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6  bg-[#0f1b39] text-white'>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl'>
                                            
                                            <span>Wallet Balance</span>
                                            <p className=''>{userInfo.walletBalance}</p>
                                      </div>
                                     
                                  </div>
                            </card>
                            <card className='  rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6  bg-[#0f1b39] text-white'>
                                  <div className='flex flex-row items-center space-x-5 py-10 px-6'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl'>
                                            <p>Ledger</p>
                                            <span>{userInfo.ledgerAccountBalance}</span>
                                      </div>
                                      
                                  </div>
                            </card>
                        </div>
                </section>
              
                <section className='flex flex-row justify-between pt-10 gap-5 '>
                        <div className='h-[64vh] w-[120vh] bg-white rounded-lg border-t-2 border-[#0f1b39]'> 
                          <div className='p-10'>
                           <Chart/>
                          </div>
                        </div>
                      <div className='h-[62vh] w-[49vh] bg-[#0f1b39] rounded-lg'>
                            <Crypto/>
                          </div>
                       
                        
                </section>
                <section className=' flex flex-row  justify-between pt-10 gap-5'>
                        <div className='rounded-2xl'> 
                            <Trade/>
                        </div>
                       
                      
                </section>
                <section className='flex flex-row gap-12'>
                  <div className=''>
                      <Calender/>
                  </div>
                  <div className='pt-10'>
                  <SafeDeals totalDeals={500} activeDeals={445} btcAmount={5.6307173} />
        
                  </div>
                </section>
                <section className='pt-10 '>
                  <CurrencyRate/>
                  <div className='pt-10 flex flex-row justify-between gap-3'>
                              <div>
                              <Transfer/>
                              </div>
                              <div>
                              <WalletAddress/>
                              </div>
                        </div>
                </section>
                
                
          </main>
          <footer className="h-16  w-full bg-[#0f1b39] ">
            <div className='flex flex-row justify-between items-center text-center py-4 px-4 z-40'>
                <div className='flex flex-row items-center text-center space-x-5 '>
                    <div>
                      icon
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                      <div>
                        <BsBell className='text-xl'/>
                      </div>
                      <p>Sam Wright</p>
                </div>
            </div>
          </footer>

    </div>
  )
}

export default User