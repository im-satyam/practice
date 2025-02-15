import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex flex-col justify-center'>
            <Link to="/" className='cursor-pointer font-semibold text-md text-sky-600'>&gt;Home</Link>
        </div>

    )
}

export default Header
