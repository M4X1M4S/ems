import React from 'react'

const Header = ({data}) => {
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','');
    window.location.reload();
  }
  return (
    <div className='flex items-center justify-between my-5 '>
        <h1 className='text-white text-2xl font-medium'>Hello, <br /> <span className='text-3xl'>{data.firstName} 👋</span></h1>
        <button onClick={logOutUser} className='text-white text-xl font-medium rounded-md bg-red-500 p-3'>Log Out</button>
    </div>
  )
}

export default Header