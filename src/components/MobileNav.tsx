import { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import Toggle from "./Toggle";

const MobileNav = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="md:hidden block">
      <div className="flex justify-between pl-4 ">
        <p className=" text-xl mt-5 text-white">EtuX</p>
        <div
          className={` bg-[#272b34] z-[1000] w-full flex justify-end items-end px-6 py-3`}
        >
          <Toggle yes={checked} setChecked={setChecked} />
        </div>
      </div>

      {checked && (
        <div
          className={`w-full absolute animate-slide-in z-50 flex flex-col text-center h-auto justify-center space-y-4 items-center bg-[#272b34]`}
        >
          <Link to='/'><p
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B242F]/30 text-white py-3 w-full rounded-md"
          >
            Home
          </p>
          </Link>
          <p
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B242F]/30 text-white py-3 w-full rounded-md"
          >
            <a href="#about">About</a>
          </p>

          <p
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B2421B242F]/30 text-white py-3 w-full rounded-md"
          >
            <a href="#contact"> Contact</a>
          </p>
            <div className='flex flex-col text-white text-xl mt-1 space-y-4'>
        <Link to='/cart' ><AiOutlineShoppingCart/></Link> 
         <Link to='/search'><AiOutlineSearch/></Link> 
        </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
