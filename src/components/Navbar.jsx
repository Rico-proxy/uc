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
    <nav className={`top-0 left-0 z-50 text-white px-[80px] flex flex-row items-center text-center justify-around p-5 h-24 fixed w-full ${scrolled ? 'bg-black' : ''}`}>
    <div className="text-[17px] font-bold flex flex-col">
            <img
                        src="/assets/logo.svg"
                        alt="Digital Currency"
                        width={100}
                        height={100}
                        
                      />
                      <div>
                      <p className="text-[#f5f5f5] italic">Payment System</p>
                      </div>
    </div>
    <ul className="flex space-x-6 text-[16px]">
      <li><Link to="/home" className="hover-underline py-2 px-4 rounded-md">Home</Link></li>
      <li><Link to="/about" className="hover-underline py-2 px-4 rounded-md">About Us</Link></li>
      <li><Link to="/about" className="hover-underline  py-2 px-4 rounded-md">Services</Link></li>
      <li><Link to="/about" className="hover-underline  py-2 px-4 rounded-md">Faq</Link></li>
      <li><Link to="/about" className="hover-underline  py-2 px-4 rounded-md">Contact Us</Link></li>
      
    </ul>
    
    
    <Link className='hover:bg-[#2a3b64] text-[13px]   hover:delay-150 duration-150 bg-[#0f1b39] shadow-2xl  text-white font-bold py-4 px-8 rounded-lg' to='/login'>CLIENT LOGIN</Link>    
        
  
  </nav>
  
  );
};

export default Navbar