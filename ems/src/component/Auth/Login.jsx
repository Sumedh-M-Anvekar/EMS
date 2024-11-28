import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        {handleLogin(email, password)};
        setEmail("");
        setPassword("");
    };
  return (
    <>
    <div className='flex items-center justify-center w-screen h-screen'>
    <div className='border-2 border-sky-800 px-20 py-20 hover:scale-105 transition duration-300 ease-in-out'>
        <form className='flex flex-col justify-center items-center' onSubmit={submitHandler}>
        <h3 className='text-white mb-8'> Log in page</h3>
            <input
             type="email"
             required
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value);
                }}
              placeholder='Enter email' 
              className='text-white rounded-full px-4 py-2 placeholder:text-gray-700 bg-transparent border-sky-700'/>
            <input 
            type="password" 
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            placeholder='Enter password' 
            className='mt-3 text-white rounded-full px-4 py-2 placeholder:text-gray-700 bg-transparent border-sky-700'/>
            <button type='submit' className='text-white bg-sky-800 block rounded-xl px-4 py-2 mt-4'>Log in</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login
