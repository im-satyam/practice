import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegister = async (data) => {
        console.log(data)
        await axios.post("http://localhost:8080/user/register",{
            data
        })
    }

    return (
        <>
            <div className="container flex flex-col gap-5 w-md min-h-4/5 relative p-5 rounded-4xl border-2 border-gray-200 backdrop-blur-xl shadow-xl">
                <div className='flex flex-col gap-1'>
                    <div className='text-2xl font-bold'>Welcome, New User!</div>
                    <div className='text-sm font-semibold text-gray-500'>Fill the details and join the family!</div>
                </div>
                <hr className='border-gray-300'></hr>
                <div className=''>
                    <form action="POST" onSubmit={handleSubmit(handleRegister)} className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="name">Enter Your Full Name:</label>
                            <input type="text" required placeholder='Full Name' {...register("name")} className='border-2 border-gray-200 rounded-md px-1 py-0.5' name='name' />
                            <label htmlFor="email">Enter Your Email:</label>
                            <input type="email" required placeholder='Email' {...register("email")} className='border-2 border-gray-200 rounded-md px-1 py-0.5' name='email' />
                            <label htmlFor="password">Enter Your Password:</label>
                            <input type="password" required placeholder='Set Password' {...register("password", { minLength: { value: 4, message: "Min length of password is 4" } })} className='border-2 border-gray-200 rounded-md px-1 py-0.5' name='password' />
                            {errors.password && <div className='text-red-600 text-xs'>{errors.password.message}</div>}
                        </div>
                        <hr className='border-gray-300'></hr>
                        <div>
                            <button type='submit' className='w-full bg-sky-600 text-white rounded-4xl font-bold hover:cursor-pointer transition-all scale-95 hover:scale-[1]'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register