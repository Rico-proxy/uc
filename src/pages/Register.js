import React from 'react'
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        password: form.password.value,
        confirmPassword: form.confirmPassword.value,
        phoneNumber: form.phoneNumber.value,
        // Parse the selected value to an integer
        accountType: parseInt(form.accountType.value, 10),
        address: form.address.value,
        city: form.city.value,
        state: form.state.value,
      };
    try {
      const response = await axios.post('http://159.65.31.191:4040/api/Auth/Register', formData);
      if (response.status === 201) {
        console.log("Registration successful");
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
    }
  };
  return (
    <div className='min-h-screen bg-[#0f1b39]'>
          <div className='flex justify-center pt-20'>
                <div className='flex flex-col  '>
                     <div className='font-bold'>
                            <h1 className='text-2xl font-bold mb-2 text-white text-center'>Register Your Account</h1>
                     </div>
                   <div className='shadow-2xl bg-white border-dashed border-4 rounded-2xl h-[80vh] p-16 '>
                      <form onSubmit={handleSubmit} className='flex flex-col space-x-5 '>
                        <div className='flex flex-row space-x-5'>
                        <div className='space-y-6'>
                          <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <FiMail className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            name='firstName'
                            placeholder="First Name"
                            required
                            className="pl-4 border-l-2  outline-none text-sm" // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Last Name"
                            name='lastName'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Middle Name"
                            name='middleName'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Email"
                            name='email'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Phone Number"
                            name='phoneNumber'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <select 
                          id='accountType'
                          name='accountType'
                          className="pl-4 border-l-2  outline-none text-sm w-full" >
                              <option value='0'>Select an option...</option>
                              <option value='1'>Savings Account</option>
                              <option value='2'>Current Account</option>
                              <option value='3'>Fixed Deposit</option>
                              <option value='4'>Recurring Deposit Account</option>
                              <option value='5'>Checking Account</option>
                              <option value='6'>Offshore Account</option>
                              <option value='7'>Money Mark Account</option>
                              <option value='8'>Certificate of Deposit Account</option>
                           </select>
                        </div>
                          </div>
                          <div className='space-y-6'>
                          <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Address"
                            name='address'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="City"
                            name='city'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="State"
                            name='state'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Password"
                            name='password'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                        <div className="flex items-center border-2 border-gray-200 rounded-full  p-2">
                          <RiLockPasswordLine className="text-black font-bold font-xl" /> {/* Icon */}
                          <input
                            type="text"
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            required
                            className="pl-4 border-l-2  outline-none text-sm " // Tailwind classes
                          />
                        </div>
                          </div>
                        </div>
                         <div className='pt-6'>
                        <button type='submit' className='font-medium hover:bg-white hover:text-black hover:border-black hover:border-2 bg-[#0f1b39] text-white rounded-lg p-3 w-full'>Submit</button>
                        </div>
                      </form>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Register