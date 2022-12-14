import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../json/api'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../features/store'
import { userProps } from '../features/shopSlice'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';




const Login = () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();




  //const dispatch:() => AppDispatch=useDispatch
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const submit = (): void => {
    if (user === '' || password === '') {
      enqueueSnackbar("Please,all fields are required", {
        variant: "error",
      });
    } else {
      type loginData = {
        password: string,
        email?: string,
        username?: string,
      }
      const data: loginData = user.includes('@') ? {
        email: user,
        password: password
      } : {
        username: user,
        password: password
      }

      axios.post(`${BASE_URL}login`, data)
        .then(res => {
          if (res.data.status) {
            dispatch(userProps(res.data.data));
            navigate('/')
            enqueueSnackbar("You have logged in successfully", {
        variant: "success",
      });
          }
        }).catch(err => {
          
           enqueueSnackbar(`${err.message}`, {
        variant: "error",
      });
          console.log(err)});
    }
  }





  return (
    <div className="h-screen flex justify-center items-center">

      <div className='bg-[#2B3039] p-10 flex flex-col rounded-md space-y-7  shadow-md  '>
        <p className='text-gray-300 font-semibold'>Sign In</p>
        <div>
          <label className='text-gray-300' htmlFor='user'>Username</label>
          <input value={user} onChange={(e) => setUser(e.target.value)} className="w-full p-2 outline-none text-white bg-[#272b34]" type='text' id='user' />
        </div>

        <div>
          <label className='text-gray-300' htmlFor='pass'>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)}
           className="w-full outline-none p-2 text-white bg-[#272b34]" type='text' id='pass' />
        </div>


        <div    className='flex justify-end items-end'>
          <button
            onClick={submit} 
            className="px-4 py-2 text-white  rounded-md shadow bg-[#374151]">
            Login
          </button>
        </div>

        <span className='text-gray-300'>Dont have an account?  <Link to='/register'><strong>Sign up</strong></Link> </span>

      </div>
    </div>
  )
}

export default Login