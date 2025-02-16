import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const handleUser = () => {
        const tkn = localStorage.getItem('userToken');
        if (tkn) {
            navigate('/');
        }
        else {
            navigate('/register');
        }
    }

    return (
        <>
        <div className='right-3 p-1 absolute'>
            <button onClick={handleUser} className='cursor-pointer font-semibold text-md text-sky-600'>Your Profile</button>
        </div>
        <div className='flex flex-col justify-center items-center h-screen'>
            <Link to="/login" className='cursor-pointer font-semibold text-md text-sky-600'>Login to Existing Account</Link>
            <Link to="/register" className='cursor-pointer font-semibold text-md text-sky-600'>Register a New Account</Link>
        </div>
        </>
    )
}

export default Home