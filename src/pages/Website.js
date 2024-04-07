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
                              <h1>Platform For Our Participators</h1>
                          </div>
                          <div className='text-white font-light text-sm'>
                            <p>
                            
                            At our company, we are proud to offer comprehensive global Foreign Exchange (Forex) services that cater to a diverse clientele. Our expertise extends across a vast array of products, ensuring that we can meet a wide range of financial trading needs. From multinational corporations to individual investors, our clients enjoy access to the currency markets, allowing them to trade in a multitude of currencies.
                            </p>
                          </div>
                          <div className='pt-10 flex flex-col space-y-10'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><FaAward/></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-extralight text-[14px]'>As part of our <span className='font-bold'>Prime Banking </span>  package, clients receive unparalleled attention from a dedicated Relationship Manager—a financial confidant equipped to provide expert advice and customized solutions that align with each client’s unique financial aspirations. The Relationship Manager serves as a single point of contact, ensuring a seamless and cohesive banking experience.</p>
                                      </div>
                                </div>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><FaAward/></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-extralight text-[14px]'>The service spectrum of <span className='font-bold'>Private Banking</span>  includes a suite of exclusive investment opportunities that are not accessible to the broader market. These range from bespoke portfolio management to private equity and alternative investments, each selected to align with the individual’s risk profile, return expectations, and long-term financial ambitions.</p>
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
                              <h1>Platform For Our Participators</h1>
                          </div>
                          <div className='text-white font-light text-sm'>
                            <p>
                            We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental.
                            </p>
                          </div>
                          <div className='flex flex-col space-y-3'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><FaAward/></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </div>
                                </div>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><FaAward/></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </div>
                                </div>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><FaAward/></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
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
    <mvp className="min-h-screen pt-40 p-[80px]">
          <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                            MVP
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                        </div>
                        <div className='grid grid-cols-2 gap-8 pt-20'>
                    <div className='flex flex-col space-y-4'>
                          <div className='text-white text-4xl font-bold'>
                              <h1>We’re Reinventing The Global Equity Blockchian</h1>
                          </div>
                          <div className='text-[#c62a88] text-2xl font-light '>
                            <p>
                            Automatic matching of buyers & sellers via unique artificial intelligence approach.
                            </p>
                          </div>
                          <div className='flex flex-col space-y-6'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><GiCheckMark /></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </div>
                                </div>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><GiCheckMark /></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </div>
                                </div>
                                
                                
                          </div>

                    </div>
                    <div className="flex justify-center animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/iconimg3.png"
                        alt="Digital Currency"
                        width={550}
                        height={200}
                        
                      />
                    </div>

            </div>
          </div>
    </mvp>
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
    <document className="min-h-screen p-[80px]">
          <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                            DOCUMENTS
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                   </div>
                   <div className='grid grid-cols-2 pt-20'>
                   <div className=" flex justify-center ">
                      <img
                        src="/assets/whitepaper.png"
                        alt="Digital Currency"
                        width={450}
                        height={200}
                        
                      />
                    </div>
                    <div className='flex  flex-col space-y-3 font-light text-[16px] text-white'>
                          <p>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything therefore always embarrassing hidden in the middle of text.
                          </p>
                          <p>
                          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.


                          </p>
                          <p>
                          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                          </p>

                    </div>
                   </div>

          </div>
    </document>
    
     <mobile className='min-h-screen pt-40'>
            <div className='flex flex-col'>
                    <div className="relative font-bold text-2xl text-white text-center">
                            MOBILE APP
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                   </div>
                   <div className='grid grid-cols-2 pt-36'>
                   <div className="pt-20 flex justify-center animate-[bounce_8s_ease-in_infinite]">
                      <img
                        src="/assets/download-banner.png"
                        alt="Digital Currency"
                        width={450}
                        height={200}
                        
                      />
                    </div>
                    <div className=" text-white  p-10 ">
                        <h1 className="text-5xl font-bold mb-4">Download The App Today</h1>
                        <p className="mb-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        
                        <div className='flex flex-col space-y-6'>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><GiCheckMark /></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </div>
                                </div>
                                <div className='flex space-x-3 tet-center items-center text-white'>
                                    <div div className='flex justify-center items-center w-[115px] h-16 bg-[#c62a88] rounded-full mb-4'>
                                       <p className='text-xl font-bold text-white'><GiCheckMark /></p>
                                      </div>
                                      <div className=''>
                                          <p className='font-light text-[14px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </div>
                                </div>
                                
                                
                          </div>
                        
                        <div className="flex justify-center space-x-4 pt-6">
                          <button className="bg-pink-500 px-6 py-3 rounded-lg flex items-center font-bold text-lg">
                            <FaApple className="mr-2" />
                            APP STORE
                          </button>
                          <button className="bg-black px-6 py-3 rounded-lg flex items-center font-bold text-lg">
                            <FaGooglePlay className="mr-2" />
                            GOOGLE PLAY
                          </button>
                        </div>

                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                          {/* Background network-like design can be added here with an SVG or CSS */}
                        </div>
                      </div>
                   </div>
            </div>

     </mobile>
     <contact className="map">
              <div className="min-h-screen pt-[200px]  w-full h-full flex  justify-center items-center bg-black/70
          backdrop-brightness-75 px-[80px]">
          
          <div className=" grid grid-cols-2 gap-8 text-white   items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold tracing-widest">Prime Banking Solutions.</h1>
              <p className='text-sm font-light w-3/5'>
                  We offer a fully electronic platform for Cryptocurrency prime banking Solutions.
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