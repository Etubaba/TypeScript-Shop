import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">

<div className='bg-[#2B3039] p-10 flex flex-col rounded-md space-y-7  shadow-md  '>
  <p className='text-gray-300 font-semibold'>Sign In</p>
  <div>
    <label className='text-gray-300' htmlFor='user'>Username</label>
    <input className="w-full p-2 outline-none text-white bg-[#272b34]" type='text' id='user'/>
  </div>

  <div>
    <label className='text-gray-300' htmlFor='pass'>Password</label>
    <input className="w-full outline-none p-2 text-white bg-[#272b34]" type='text' id='pass'/>
  </div>

  <span className='text-gray-300'>Dont have an account?  <Link to='/register'><strong>Sign up</strong></Link> </span>

</div>
    </div>
  )
}

export default Login