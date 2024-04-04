import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg'; // Importing an icon for the menu button
import { RiDashboardFill } from "react-icons/ri";
const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-r-2 border-black'>
      <button onClick={toggleDrawer}>
        <CgMenu size={20} />
      </button>
      <div
        className={`side-drawer ${isOpen ? 'open' : 'closed'}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '250px',
          height: '100%',
          background: 'white',
          boxShadow: '2px 0px 5px rgba(0,0,0,0.5)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <button onClick={toggleDrawer} className='text-black'>Close</button>
        <div className='flex flex-col space-y-3 text-black px-8 pt-20'>
                <div className='flex flex-row text-center space-x-3'>
                <RiDashboardFill  className='text-2xl'/>
                <span>Dashboard</span>
                </div>
                <div className='flex flex-row text-center space-x-3'>
                <RiDashboardFill  className='text-2xl'/>
                <span>Dashboard</span>
                </div>
                <div className='flex flex-row text-center space-x-3'>
                <RiDashboardFill  className='text-2xl'/>
                <span>Dashboard</span>
                </div>
                <div className='flex flex-row text-center space-x-3'>
                <RiDashboardFill  className='text-2xl'/>
                <span>Dashboard</span>
                </div>
                
        </div>
        
      </div>
    </div>
  );
};

export default SideDrawer;
