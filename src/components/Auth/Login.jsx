import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {
  
  function handleSubmit(e){
       e.preventDefault();
       console.log("Email: "+ email," Password: " +password)
       handleLogin(email,password);
       setEmail('');
       setPassword('');
  }
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#000000]'>

      <div className='border-2 rounded-xl border-emerald-600 p-20 '>

        <form onSubmit={(e)=>{
          handleSubmit(e);
        }} 
        className='flex flex-col items-center justify-center'>


          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
           required 
          className='text-white bg-transparent outline-none border-2 border-emerald-600 text-lg py-3 px-5 rounded-full placeholder:text-gray-400  '
          type="email"
           placeholder='Enter your email' />


          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
          required
           className='text-white bg-transparent outline-none border-2 border-emerald-600 text-lg py-3 px-5 rounded-full placeholder:text-gray-400 mt-3 '
            type="password" 
            placeholder='Enter password' />

          <button 
          className='text-white border-none  outline-none border-2 font-semibold hover:bg-emerald-700 bg-emerald-600 text-lg py-3 px-5 rounded-full placeholder:text-white mt-5 '>Log in</button>
         

        </form>
      </div>
    </div>
  ) 
}

export default Login;