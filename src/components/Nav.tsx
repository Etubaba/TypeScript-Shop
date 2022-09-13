import React,{ useEffect, useState} from "react";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {BsFillPersonFill, BsPersonCircle} from "react-icons/bs"
import {MdLogin} from "react-icons/md"
import { RiLogoutCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { handleLogin, userProps } from "../features/shopSlice";
import { RootState } from "../features/store";


function Nav() {
  const [open,setOpen]=useState<Boolean>(false)

  const navigate= useNavigate()
  const dispatch=useDispatch()

  const login =useSelector((state:RootState)=>state.shop.isLoggedIn)


  const handleLogout =()=>{
    navigate('/login') 
    dispatch(handleLogin(false))
    dispatch(userProps(null))
    localStorage.removeItem('tslogin')
    localStorage.removeItem('tsuser')
    alert('Logout completed')
   
  }
  return (
    <div className="md:flex hidden  bg-[#272b34] py-4 sticky z-50 top-0 items-center text-white px-10 justify-between">
      <Link to='/'><h1 className="text-4xl">EtuX</h1></Link>
      <div className="flex text-base mr-28 space-x-16">
       <Link to='/'><p>Home</p></Link>
        <p>About us</p>
        <p>Contact Us </p>

        <div className='flex mt-1 space-x-5'>
        <Link to='/cart' ><AiOutlineShoppingCart/></Link> 
         <Link to='/search'><AiOutlineSearch/></Link> 
      {!login?<Link to='/login'><MdLogin/></Link> :  <BsPersonCircle onClick={()=>setOpen(!open)} /> }

                      {open && (
                  <div className="absolute text-black mt-4 ml-5 flex flex-col space-y-1 bg-white border border-gray-300 rounded-md">
                    <div
                      className="flex items-center space-x-1 hover:bg-gray-400 cursor-pointer px-2 py-1 hover:rounded-t-md"
                      onClick={() => {
                        navigate("/order");
                        setOpen(false);
                      }}
                    >
                      <BsFillPersonFill className="w-4 h-4" />
                      <p className="text-sm text-black font-semibold">
                        View Orders
                      </p>
                    </div>
                    <div
                      className="flex items-center cursor-pointer space-x-1 hover:bg-gray-400 px-2 py-1 hover:rounded-t-md "
                      onClick={handleLogout}
                    >
                      <RiLogoutCircleLine className="w-4 h-4 " />
                      <p className="text-sm text-black font-semibold">Logout</p>
                    </div>
                  </div>
                )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
