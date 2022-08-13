import React from "react";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"


function Nav() {
  return (
    <div className="flex py-4 items-center text-white px-10 justify-between">
      <h1 className="text-4xl">EtuX</h1>
      <div className="flex text-xl mr-28 space-x-16">
        <p>Home</p>
        <p>About us</p>
        <p>Contact Us </p>

        <div className='flex space-x-5'>
          <AiOutlineShoppingCart/>
          <AiOutlineSearch/>
        </div>
      </div>
    </div>
  );
}

export default Nav;
