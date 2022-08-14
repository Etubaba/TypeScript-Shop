import React from "react";
import { GrStar } from "react-icons/gr";

const Details = () => {
  return (
    <div className="h-screen mx-4 md:mx-16 ">
      <div className="bg-[#2B3039] mt-10 z-40 rounded-md shadow-md p-5 md:p-10 md:flex-row  flex-col-reverse flex">
        <div className="md:w-1/2 w-full h-96 flex-col  flex p-3 space-y-2">
          <div className="mt-28 flex flex-col space-y-3">
            <p className="capitalize text-gray-300 font-bold ">
              ADDIDAS SHOES
            </p>
            <span className="flex space-x-1 mt-1 text-yellow-300">
              {" "}
              {[1, 2, 3, 4, 5].map((star, i) => (
                <GrStar />
              ))}
            </span>
            <p className="w-[90%] text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              maxime quos assumenda alias amet voluptatibus nulla dolorum velit
              accusamus ab.
            </p>
            <p className="text-gray-300 text-xl">$646</p>


             <button
        className="flex items-center space-x-3 justify-center bg-gray-700 hover:bg-gray-600 md:px-6 py-2  rounded-full w-full md:w-1/2 mt-2"
       
      >
        <span className="tracking-wider text-xs font-semibold text-gray-300 md:text-sm">
          {/*  */}
          Add to cart
        </span>
        {/* <MdKeyboardArrowRight className="h-5 w-5 text-white" /> */}
      </button>
          </div>
        </div>
        <img
          src="/assets/wave1.png"
          alt=""
          className="md:w-1/2 w-full z-40 h-96 object-fill"
        />
      </div>
    </div>
  );
};

export default Details;
