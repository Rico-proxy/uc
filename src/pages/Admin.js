import React from 'react'
import { BiEnvelope } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import Button from '../components/Button';
import { BiBitcoin } from "react-icons/bi";
import TimeBasedGreeting from '../components/Time';
import { AiOutlineSend } from "react-icons/ai";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import Chart from '../components/Chart';
import Copy from '../components/Copy';

const Admin = () => {
  return (
    <div className='min-h-screen text-white'>
          <header className="h-16 fixed w-full bg-[#0f1b39] ">
            <div className='flex flex-row justify-between items-center text-center py-4 px-4 z-40'>
                <div className='flex flex-row items-center text-center space-x-5 '>
                    <div>
                      <Button/>
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                      <div>
                        <BsBell className='text-xl'/>
                      </div>
                      <p>Sam Wright</p>
                </div>
            </div>
          </header>
          <main className='px-20 pb-20 flex flex-col text-black pt-32 bg-slate-200 min-h-screen'>
                <section className='flex flex-col'>
                        <div className='text-black text-2xl font-bold flex flex-row justify-between'>
                           <div className='flex flex-row space-x-3'>
                           <TimeBasedGreeting/>, 
                           <span>firstName</span> 
                            </div>
                            <div className='flex flex-row'>
                            <AiOutlineSend />
                            <BsBoxArrowInDownLeft />
                            </div>
                            <div>
                              <p>Ledger Account</p>
                              <Copy/>
                            </div>
                            
                         </div>
                        <div className='grid grid-cols-3 justify-center pt-20'>
                            <card className='bg-white rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6 hover:bg-[#0f1b39] hover:text-white'>
                                  <div className='flex flex-row items-center space-x-3 py-10 px-6'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl'>
                                            <p>1.003747 BTC</p>
                                            <span>Wallet BTC balance</span>
                                      </div>
                                      <BiBitcoin  className='text-2xl'/>
                                  </div>
                            </card>
                            <card className='bg-white rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6 hover:bg-[#0f1b39] hover:text-white'>
                                  <div className='flex flex-row items-center space-x-3 py-10 px-6'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl'>
                                            <p>1.003747 BTC</p>
                                            <span>Wallet BTC balance</span>
                                      </div>
                                      <BiBitcoin  className='text-2xl'/>
                                  </div>
                            </card>
                            <card className='bg-white rounded-2xl shadow-xl shadow-[#0f1b39] w-5/6 hover:bg-[#0f1b39] hover:text-white'>
                                  <div className='flex flex-row items-center space-x-3 py-10 px-6'>
                                      <div>
                                      <BiBitcoin  className='text-2xl'/>
                                      </div>
                                      <div className='flex flex-col text-xl'>
                                            <p>1.003747 BTC</p>
                                            <span>Wallet BTC balance</span>
                                      </div>
                                      <BiBitcoin  className='text-2xl'/>
                                  </div>
                            </card>
                        </div>
                </section>
                <section className='flex flex-row justify-between pt-20 gap-5'>
                        <div className='h-[50vh] w-[90vh] bg-white'> 
                          <Chart/>
                        </div>
                        <div className='h-[50vh] w-[40vh] bg-white'>
                            
                          </div>
                </section>
                <section className='flex flex-row  justify-between pt-20 gap-5'>
                        <div className='h-[50vh] w-[90vh] bg-white border-l-2 border-[#0f1b39]'> 

                        </div>
                        <div className='h-[50vh] w-[60vh] bg-white'>
                              <div className='flex flex-col p-12 space-y-3'>
                                  <div>
                                    Transfer Coins
                                  </div>
                                  <div className="flex flex-col pt-10">
                                    <div>
                                      Wallet Address
                                    </div>
                                   <div className='  flex flex-row items-center border-2 border-gray-200  p-2'>
                                   <FiMail className="text-black font-bold font-2xl " />
                                    <input type="text" name='addressField' placeholder="01X345AE8" required className="border-l  outline-none text-sm" />
                                   </div>
                                   
                                 </div>
                                 <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                                        <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                                        <input type='text'name='coin' placeholder='enter coin' required/>
                                        <select 
                                        id='accountType'
                                        name='accountType'
                                        className="pl-4 border-l-2  outline-none text-sm w-full" >
                                            <option value='0'>BTC</option>
                                            <option value='1'>ETH</option>
                                            <option value='2'>LTC</option>
                                            <option value='3'>BNB</option>
                                          </select>
                                  </div>
                                    
                              </div>
                          </div>
                </section>
          </main>
          <footer className="h-16  w-full bg-[#0f1b39] ">
            <div className='flex flex-row justify-between items-center text-center py-4 px-4 z-40'>
                <div className='flex flex-row items-center text-center space-x-5 '>
                    <div>
                      <Button/>
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

export default Admin