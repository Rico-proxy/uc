import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { GiCheckMark } from "react-icons/gi";
import { FaAward } from 'react-icons/fa';
import { FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare } from 'react-icons/fa';
import { FaApple, FaGooglePlay, FaUser, FaDownload, FaHeart } from 'react-icons/fa';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
const Website = () => {
  return (
    <div className='p-[80px] flex flex-col space-y-8 min-h-screen bg-[#0f1b39]'>
      <Navbar />
      
      <main className=''>
      <div className="min-h-screen pt-10 flex items-center justify-center ">
 
      <div className=" grid grid-cols-2 gap-8 text-white   items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold tracing-widest">We’re Reinventing The Global Equity Blockchian.</h1>
          <p className='text-sm font-light tracking-wider'>We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars tied up in rental deposits.
          </p>
          <div className='flex flex-row  space-x-6 pt-4'>
          <button  className="hover:bg-transparent hover:border-2 hover:border-white bg-[#c62a88]  text-white font-bold py-4 px-8 rounded-3xl">
            WHITEPAPER
          </button>
          <button  className="hover:bg-[#c62a88] hover:border-none border-2 border-white   text-white font-bold py-4 px-8 rounded-3xl">
            TOKENSALE
          </button>
          </div>
          
        </div>
        
        <div className="flex justify-center animate-[bounce_6s_ease-in_infinite]">
          <img
            src="/assets/home.png"
            alt="Digital Currency"
            width={500}
            height={200}
            
          />
        </div>
      </div>
    </div>
    </main>
    <main className='flex justify-center min-h-screen'>
            <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                     LIVE MARKET
                  <div className=" absolute left-[480px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                </div>
                <div className='flex flex-row gap-3 pt-40'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
    </main>
    <main className='flex justify-center min-h-screen'>
            <div className='flex flex-col'>
                   <div className="relative font-bold text-2xl text-white text-center">
                     ABOUT COMPANY
                  <div className=" absolute left-[540px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                </div>
                <div className='flex flex-row gap-6  text-white   items-center pt-12'>
                            <div className="space-y-8 w-full">
                      <h1 className="text-5xl font-semibold ">About The Company</h1>
                      <div className='flex flex-col space-y-3'>
                      <p className='text-sm font-light '>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars.
                      </p>
                      <p className='text-sm font-light'>
                      We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental experience and wants to help tenants unfreeze millions of dollars tied up in rental tenants deposits.
                      </p>
                      </div>
                      <div className=' pt-4'>
                      <button  className="hover:bg-transparent hover:border-2 hover:border-white bg-[#c62a88]  text-white font-bold py-4 px-8 rounded-3xl">
                        WATCH VIDEO
                      </button>
                      </div>
                      
                    </div>
                    
                    <div className="flex justify-center animate-[bounce_6s_ease-in_infinite]">
                      <img
                        src="/assets/about.png"
                        alt="Digital Currency"
                        width={850}
                        height={200}
                        
                      />
                    </div>
                </div>
            </div>
    </main>
    <main className='flex justify-center min-h-screen'>
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
                      <p className='px-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    {/* Repeat the above div with slight variations for 2, 3, and 4 */}
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>2</p>
                      </div>
                      <p className='text-xl font-bold'>Safe & Secure</p>
                      <p className='px-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>3</p>
                      </div>
                      <p className='text-xl font-bold'>Buy & Sell</p>
                      <p className='px-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='flex justify-center items-center w-20 h-20 bg-[#c62a88] rounded-full mb-4'>
                        <p className='text-2xl font-bold'>4</p>
                      </div>
                      <p className='text-xl font-bold'>Flexibility</p>
                      <p className='px-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </div>

            </div>
    </main>
    <platform className='min-h-screen'>
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
                            We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology to ensure seamless rental.
                            </p>
                          </div>
                          <div className='flex flex-col space-y-6'>
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
    <mvp className="min-h-screen pt-40">
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
    <token className="min-h-screen pt-20">
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
    <document className="min-h-screen ">
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
    <meet className="min-h-screen pt-20">
      <div className='flex flex-col'>
                  <div className="relative font-bold text-2xl text-white text-center">
                            Meet The Team
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                   </div> 
                   <div className="pt-32 container mx-auto flex justify-around items-center">
        
        {/* Profile 1 */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src="/assets/1.jpg" alt="Gary Hunt" />
          <h3 className="mt-2 text-white text-lg font-semibold">Gary Hunt</h3>
          <p className="text-white text-sm">Marketer</p>
          <div className="flex mt-2">
            <FaFacebookSquare className="text-white text-2xl mr-2" />
            <FaTwitterSquare className="text-white text-2xl mr-2" />
            <FaGooglePlusSquare className="text-white text-2xl" />
          </div>
        </div>

        {/* Profile 2 */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src="/assets/2.jpg" alt="Ayoub Fennouni" />
          <h3 className="mt-2 text-white text-lg font-semibold">Ayoub Fennouni</h3>
          <p className="text-white text-sm">Manager</p>
          <div className="flex mt-2">
            <FaFacebookSquare className="text-white text-2xl mr-2" />
            <FaTwitterSquare className="text-white text-2xl mr-2" />
            <FaGooglePlusSquare className="text-white text-2xl" />
          </div>
        </div>

        {/* Profile 3 */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src="/assets/3.jpg" alt="Mark Linomit" />
          <h3 className="mt-2 text-white text-lg font-semibold">Mark Linomit</h3>
          <p className="text-white text-sm">Python Developer</p>
          <div className="flex mt-2">
            <FaFacebookSquare className="text-white text-2xl mr-2" />
            <FaTwitterSquare className="text-white text-2xl mr-2" />
            <FaGooglePlusSquare className="text-white text-2xl" />
          </div>
        </div>

        {/* Profile 4 */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src="/assets/4.jpg" alt="Thompson Luis" />
          <h3 className="mt-2 text-white text-lg font-semibold">Thompson Luis</h3>
          <p className="text-white text-sm">Developer</p>
          <div className="flex mt-2">
            <FaFacebookSquare className="text-white text-2xl mr-2" />
            <FaTwitterSquare className="text-white text-2xl mr-2" />
            <FaGooglePlusSquare className="text-white text-2xl" />
          </div>
        </div>

        {/* Profile 5 */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src="/assets/5.jpg" alt="Amira Yerden" />
          <h3 className="mt-2 text-white text-lg font-semibold">Amira Yerden</h3>
          <p className="text-white text-sm">UI/UX Designer</p>
          <div className="flex mt-2">
            <FaFacebookSquare className="text-white text-2xl mr-2" />
            <FaTwitterSquare className="text-white text-2xl mr-2" />
            <FaGooglePlusSquare className="text-white text-2xl" />
          </div>
        </div>

        {/* Profile 6 */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full" src="/assets/6.jpg" alt="Martha Valdes" />
          <h3 className="mt-2 text-white text-lg font-semibold">Martha Valdes</h3>
          <p className="text-white text-sm">React Developer</p>
          <div className="flex mt-2">
            <FaFacebookSquare className="text-white text-2xl mr-2" />
            <FaTwitterSquare className="text-white text-2xl mr-2" />
            <FaGooglePlusSquare className="text-white text-2xl" />
          </div>
        </div>

      </div>s
      </div>
     </meet>
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
     <faq className="min-h-screen pt-20">
          <div className='flex flex-col'>
                        <div className="relative font-bold text-2xl text-white text-center">
                            FREQUENTLY ASKED QUESTIONS
                          <div className=" absolute left-[530px] bottom-0  h-[2px] bg-[#c62a88] w-[55px]"></div>
                       </div>
                        <div>
                        <Accordion className='bg-black'>
                          <AccordionItem header="What is Cryptocurrency?" className="bg-[#c62a88] text-2xl font-bold text-white p-5 rounded-tl-lg rounded-br-lg">
                          <div className='border-t'>
                          Cryptocurrency refers to a digital or virtual currency that uses cryptography to secure and verify transactions as well as to control the creation of new units. Cryptocurrencies operate independently of a central bank and are decentralized, meaning they are not controlled by any government or financial institution.
                          </div>
                          
                          </AccordionItem>

                          <AccordionItem header="Where does it come from?">
                            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                            vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                            vitae, accumsan auctor mi.
                          </AccordionItem>

                          <AccordionItem header="Why do we use it?">
                            Suspendisse massa risus, pretium id interdum in, dictum sit
                            amet ante. Fusce vulputate purus sed tempus feugiat.
                          </AccordionItem>
                        </Accordion>
                        </div>
          </div>

     </faq>
    </div>
  )
}

export default Website