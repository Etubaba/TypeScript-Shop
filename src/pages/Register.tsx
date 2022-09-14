import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../json/api'
import { useSnackbar } from 'notistack';

const Register = () => {
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const navigate=useNavigate()

  const submit = (): void => {
    if (username === '' || password === '' || password === '') {
      enqueueSnackbar("All fields are required", {
        variant: "error",
      });
    } else {
      type loginData = {
        password: string,
        email?: string,
        username?: string,
      }
      const data: loginData = {
        password,
        username,
        email,
      }
      axios.post(`${BASE_URL}register`, data)
        .then(res => {
          if (res.data.status) {
          
            navigate('/login')
           enqueueSnackbar("Registration completed successfully", {
        variant: "success",
      });
            setPassword('')
            setUsername('')
            setEmail('')
          }
        }).catch(err => {
           enqueueSnackbar("Something went wrong", {
        variant: "error",
      });
          console.log(err)});
    }
  }





  return (
    <div className="h-screen flex justify-center items-center">

<div className='bg-[#2B3039] p-10 flex flex-col rounded-md space-y-7  shadow-md  '>
  <p className='text-gray-300 font-semibold'>Sign up</p>
  <div>
    <label className='text-gray-300' htmlFor='user'>Username</label>
    <input value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full p-2 outline-none text-white bg-[#272b34]" type='text' id='user'/>
  </div>
  <div>
    <label className='text-gray-300' htmlFor='email'>Email</label>
    <input  value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 outline-none text-white bg-[#272b34]" type='text' id='email'/>
  </div>
  <div>
    <label className='text-gray-300' htmlFor='pass'>Password</label>
    <input  value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full outline-none p-2 text-white bg-[#272b34]" type='text' id='pass'/>
  </div>

   <div    className='flex justify-end items-end'>
          <button
           onClick={submit} 
            className="px-4 py-2 text-white  rounded-md shadow bg-[#374151]">
            Register
          </button>
        </div>

  <span className='text-gray-300'>Already have an account?  <Link to='/login'><strong>Sign In</strong> </Link></span>

</div>
    </div>
  )
}

export default Register