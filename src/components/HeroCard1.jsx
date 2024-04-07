import React from 'react'
import { Link } from 'react-router-dom'
const HeroCard1 = () => {
  return (
    <div className='hero'>
        <div className="min-h-screen pt-[200px]  w-full h-full flex  justify-center items-center bg-black/70
 backdrop-brightness-75 px-[80px]">
 
 <div className=" grid grid-cols-2 gap-8 text-white   items-center">
   <div className="space-y-8">
     <h1 className="text-6xl font-bold tracing-widest">Trusted and Regulated.</h1>
     <p className='text-sm font-light w-3/5'>
        We are a fully licensed and regulated bank serving the financial community.
     </p>
     <div className='flex flex-row  space-x-6 pt-4 text-sm'>
     <Link className='hover:bg-[#2a3b64]   hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white font-bold py-4 px-8 rounded-lg' to='/login'>REGULATIONS</Link>
     <Link className='hover:bg-[#2a3b64] border  hover:delay-150 duration-150 bg-transparent shadow-2xl  text-white font-bold py-4 px-8 rounded-lg' to='/login'>CLIENT SUPPORT</Link>
     </div>
     
   </div>
   
   
 </div>
</div>
    </div>
  )
}

export default HeroCard1