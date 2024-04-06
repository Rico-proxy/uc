import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`top-0 left-0 z-50 text-white flex flex-row items-center text-center justify-around p-5 h-24 fixed w-full ${scrolled ? 'bg-black' : ''}`}>
    <div className="text-[23px] font-bold">Bit<span className=' font-bold'>Way</span></div>
    <ul className="flex space-x-6 text-[20px]">
      <li><Link to="/about" className="hover-underline py-2 px-4 rounded-md">Home</Link></li>
      <li><Link to="/about" className="hover-underline py-2 px-4 rounded-md">About Us</Link></li>
      <li><Link to="/about" className="hover-underline  py-2 px-4 rounded-md">Services</Link></li>
      <li><Link to="/about" className="hover-underline  py-2 px-4 rounded-md">Faq</Link></li>
      <li><Link to="/about" className="hover-underline  py-2 px-4 rounded-md">Contatc Us</Link></li>
      
    </ul>
    
    
    <Link className='hover:bg-[#2a3b64]   hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white font-bold py-4 px-8 rounded-3xl' to='/login'>CLIENT LOGIN</Link>    
        
  
  </nav>
  
  );
};

export default Navbar