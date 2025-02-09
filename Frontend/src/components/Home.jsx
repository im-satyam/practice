import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center h-screen'>
            <Link to="/login" className='cursor-pointer font-semibold text-md text-sky-600'>Login to Existing Account</Link>
            <Link to="/register" className='cursor-pointer font-semibold text-md text-sky-600'>Register a New Account</Link>
        </div>
        </>
    )
}

export default Home