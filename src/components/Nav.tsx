import React from "react";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"


function Nav() {
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
        </div>
      </div>
    </div>
  );
}

export default Nav;
