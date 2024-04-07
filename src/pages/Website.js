import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { GiCheckMark } from "react-icons/gi";
import { FaAward } from 'react-icons/fa';
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare } from 'react-icons/fa';
import { FaApple, FaGooglePlay, FaUser, FaDownload, FaHeart } from 'react-icons/fa';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Hero from '../components/Hero'
import Message from '../components/Message';
const Website = () => {
  return (
    <div className=' flex flex-col min-h-screen bg-[#0f1b39]'>
    <Navbar />
      
      <Hero/>
    <main className='flex justify-center  pt-20 px-[80px]'>
            <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                     LIVE MARKET
                  <div className=" absolute left-[480px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                </div>
                <div className='flex flex-row gap-3 pt-10'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
    </main>
    <main className='flex justify-center pt-40  p-[80px]'>
            <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                     ABOUT COMPANY
                  <div className=" absolute left-[540px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                </div>
                <div className='flex flex-row gap-6  text-white   items-center pt-12'>
                            <div className="space-y-8 w-3/5">
                      <h1 className="text-5xl font-semibold ">About The Company</h1>
                      <div className='flex flex-col space-y-3'>
                      <p className='text-sm font-light '>
                      BitPay Payment Systems is a bitcoin payment service provider based in Atlanta, Georgia, United States. It was founded in May 2011 by Tony Gallippi and Stephen Pair and provides payment processing services for merchants using Bitcoin and Bitcoin Cash. BitPay Payment Systems has been authorized to operate in the United Kingdom and Canada by Joaquin Almide, a retired authority figure.
                      </p>
                      </div>
                      <div className='text-sm font-light pt-4'>
                      <p>We are a full-service subsidiary and franchise of BitPay Payment Systems, focused on Electronic Credit Union and Private Banking, Crypto Bitcoin Transfer. Our headquarters are located in Northern Ireland, United Kingdom, with a subsidiary office in Ontario, Canada. Our Board of Directors and Senior Executive team are experienced international bankers and crypto technology experts, with a reputation of the highest stature and extensive experience in running financial institutions.</p>
                      </div>
                      
                    </div>
                    
                    <div className="flex justify-center bg-[#060911] p-4">
                    <video width="820" height="440" controls>
                        <source src="assets/about.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                </div>
            </div>
    </main>
    <main className='flex justify-center min-h-screen p-[80px]'>
            <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                     LIVE MARKET
                  <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                </div>
                <div className='grid grid-cols-4 gap-6 pt-40 px-10 text-white'>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>1</p>
                      </div>
                      <p className='text-xl font-bold'>Wallet</p>
                      <p className='px-4 font-light'>
                      Quickly manage and access your funds with our user-friendly digital wallet.
                      </p>
                    </div>
                    {/* Repeat the above div with slight variations for 2, 3, and 4 */}
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>2</p>
                      </div>
                      <p className='text-xl font-bold'>Safe & Secure</p>
                      <p className='px-4 font-light'>
                      Your transactions are secured with advanced encryption and anti-fraud technology.


                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>3</p>
                      </div>
                      <p className='text-xl font-bold'>Buy & Sell</p>
                      <p className='px-4 font-light'>
                      Instant transactions with competitive rates for all your buying and selling needs.
                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>4</p>
                      </div>
                      <p className='text-xl font-bold'>Flexibility</p>
                      <p className='px-4 font-light'>
                      Choose how you pay with our adaptable payment solutions and multi-currency support.
                      </p>
                    </div>
                  </div>

            </div>
    </main>
    <platform className='min-h-screen p-[80px]'>
      <div className='flex flex-col'>
                      <div className="relative font-bold text-2xl text-white text-center">
                            PLATFORM
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                        </div>
                   <div className='grid grid-cols-2 gap-8 pt-20'>
                    <div className='flex flex-col space-y-3'>
                          <div className='text-white text-2xl font-bold'>
                              <h1>
                              Prime Banking: Redefining Personalized Financial Excellence
                              </h1>
                          </div>
                          <div className='text-white font-light text-sm'>
                            <p>
                            
                            At our company, we are proud to offer comprehensive global Foreign Exchange (Forex) services that cater to a diverse clientele. Our expertise extends across a vast array of products, ensuring that we can meet a wide range of financial trading needs. From multinational corporations to individual investors, our clients enjoy access to the currency markets, allowing them to trade in a multitude of currencies.
                            </p>
                          </div>
                          <div className='pt-10 flex flex-col space-y-10'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    
                                      <div className=''>
                                          <p className='font-extralight text-[14px]'>Prime Banking is a bespoke financial service tailored for the discerning client who seeks more than just a transactional relationship with their financial institution. It represents the pinnacle of personalized banking, offering clients an exclusive gateway to a suite of premium products, dedicated service, and financial expertise.

                                          As part of our Prime Banking package, clients receive unparalleled attention from a dedicated Relationship Manager—a financial confidant equipped to provide expert advice and customized solutions that align with each client’s unique financial aspirations. The Relationship Manager serves as a single point of contact, ensuring a seamless and cohesive banking experience.</p>
                                      </div>
                                </div>
                             
                                
                                
                          </div>

                    </div>
                    <div className="flex justify-center animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/platform.png"
                        alt="Digital Currency"
                        width={550}
                        height={200}
                        
                      />
                    </div>

            </div>
            <div className='grid grid-cols-2 gap-8 pt-[230px]'>
                    <div className='order-2 flex flex-col space-y-6'>
                          <div className='text-white text-2xl font-bold'>
                              <h1>Private Banking: Exclusive Financial Stewardship for the Affluent Individual</h1>
                          </div>
                          <div className='text-white font-light text-sm'>
                            <p>
                            We provide personal attention from a dedicated Private Banker who is focused on you and your goals.
                            </p>
                          </div>
                          <div className='flex flex-col space-y-3'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                      <div className=''>
                                          <p className='font-extralight text-[14px]'>Private Banking stands as the epitome of bespoke financial services, catering exclusively to the needs of high-net-worth individuals who require a more intimate and proactive approach to wealth management. This elite banking division is dedicated to providing a confidential and highly personalized experience, ensuring that each client's financial and lifestyle preferences are not just met, but exceeded.

                                        Our Private Banking clients are assigned a dedicated Wealth Manager, who acts as a trusted advisor and an extension of the client's financial conscience. This partnership is built on the foundations of discretion, expertise, and a deep understanding of the nuances of wealth. The Wealth Manager ensures a comprehensive assessment of the client's financial health, crafting strategies that span investment management, estate planning, tax optimization, and philanthropic endeavors.</p>
                                      </div>
                                </div>
                             
                                
                                
                          </div>

                    </div>
                    <div className="order-1 flex justify-center animate-[bounce_6s_ease-in_infinite]">
                      <img
                        src="/assets/trader-img.png"
                        alt="Digital Currency"
                        width={550}
                        height={200}
                        
                      />
                    </div>

            </div>
      </div>
    </platform>
   
    <token className="min-h-screen pt-20 p-[80px]">
      <div className='flex flex-col'>
      <div className="relative font-bold text-2xl text-white text-center">
                            TOKEN
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                        </div>
                <div className='grid grid-cols-2 pt-36'>
                  <div className='flex flex-col text-center'>
                    <h1 className="text-2xl text-white mb-10  font-bold">Token Distribution</h1>
                  <div className="pt-20 flex justify-center animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/chat1.png"
                        alt="Digital Currency"
                        width={450}
                        height={200}
                        
                      />
                    </div>
                  </div>
               
                  <div className='flex flex-col text-center'>
                    <h1 className="text-2xl text-white mb-10  font-bold">Fund Distribution</h1>
                  <div className="pt-20 flex justify-center animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/chat2.png"
                        alt="Digital Currency"
                        width={450}
                        height={200}
                        
                      />
                    </div>
                  </div>
            </div> 
      </div>


           
    </token>
   
    
    
     <contact className="map">
              <div className="min-h-screen pt-[200px]  w-full h-full flex  justify-center items-center bg-black/70
          backdrop-brightness-75 px-[80px]">
          
          <div className=" grid grid-cols-2 gap-8 text-white   items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold tracing-widest">Contact BitPayment System</h1>
              <p className='text-sm font-light w-3/5'>
              <h1 className="text-6xl font-bold tracing-widest"> </h1>
              </p>
              <div className='flex flex-row  space-x-6 pt-4 text-sm'>
              <Link className='hover:bg-[#2a3b64]   hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white font-bold py-4 px-8 rounded-lg' to='/login'>Prime Banking</Link>
              <Link className='hover:bg-[#2a3b64] border  hover:delay-150 duration-150 bg-transparent shadow-2xl  text-white font-bold py-4 px-8 rounded-lg' to='/login'>Private Banking</Link>
              </div>
              
            </div>
            <div className='text-white'>
              <h1 className='text-2xl pb-4'>Contact Us</h1>
                 <Message/>
            </div>
            
          </div>
          </div>        
     </contact>
    
     
    </div>
  )
}

export default Website