import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const User = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    email: '',
    role: '',
    // ... add other user properties as needed
  });

  useEffect(() => {
      // Assuming user information is stored in localStorage with keys 'fullName', 'email', and 'role'
      const firstName = localStorage.getItem('firstName');
      const email = localStorage.getItem('email');
      const role = localStorage.getItem('role');

      // Update the state with the retrieved information
      setUserInfo({ firstName, email, role });
  }, []);

  return (
    <div className='text-black'>User
      <div>
        <h1>Welcome, {userInfo.firstName}</h1>
        <p>Email: {userInfo.email}</p>
        <p>Role: {userInfo.role}</p>
      </div>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  )
}

export default User