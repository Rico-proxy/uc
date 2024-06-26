import { useState } from 'react';
import Padlock from '../components/Padlock';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Access = () => {
    const [accessCode, setAccessCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Wrap your axios call in a function
        const verifyAccessCode = () => {
            return axios.post('http://159.65.31.191:4040/api/Auth/verify-code',
                JSON.stringify(accessCode),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        };

        // Use toast.promise with the verifyAccessCode function
        toast.promise(
            verifyAccessCode(),
            {
                loading: 'Verifying access code...',
                success: (data) => {
                    console.log('Response', data.data); // Log the successful response
                    navigate('/website'); // Navigate on success
                    return 'Access Granted!';
                },
                error: (err) => {
                    console.error('Error', err.response?.data || err.message); // Log the error
                    // Handle specific error status
                    if (err.response && err.response.status === 400) {
                        return 'Invalid Access Code';
                    } else {
                        return 'Ooops😞, Wrong Access Code, Please try again!';
                    }
                },
            }
        );
    };

    return (
        <div className='min-h-screen bg-[#0f1b39]'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='flex justify-center pt-10'>
                <div className='flex flex-col'>
                    <div>
                        <Padlock/>
                    </div>
                    <div className='font-bold'>
                        <h1 className='text-2xl text-white font-medium mb-2'>Welcome please enter your Access Code</h1>
                    </div>
                    <div className='shadow-2xl bg-white border-dashed border-4 rounded-2xl h-[45vh] p-20'>
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                            <label className='text-black text-xl font-semibold'>Enter your Access Code:</label>
                            <input 
                                type='text' 
                                placeholder='Access Code' 
                                required value={accessCode} 
                                onChange={(e) => setAccessCode(e.target.value)} 
                                className='p-2 border border-black ' />
                            <button type='submit' className='font-medium hover:bg-white hover:text-black hover:border-black hover:border-2 bg-[#0f1b39] text-white rounded-lg p-3'>Submit</button>
                        </form>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Access;
