import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import{MdKeyboardBackspace } from 'react-icons/md'
import{GiShoppingCart } from 'react-icons/gi'
import{RiDeleteBin6Line} from 'react-icons/ri' 
import{BsFillCartXFill,BsCartFill} from 'react-icons/bs'




const Cart = () => {

  const cartList:number[]=[1,2]
  return (
    <div className=''>

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between mt-5">
          <span
          
            className="flex  text-gray-300 hover:text-crystamolPink mt-1 space-x-1"
          >
            <MdKeyboardBackspace className="mt-[0.37rem] text-xs  md:text-lg" />{" "}
            <p className="text-xs md:text-lg">Back</p>
          </span>
          {cartList.length !== 0 ? (
            <span
              // onClick={clearCart}
              className="text-xs flex space-x-2 hover:text-gray-200  md:text-lg text-gray-300"
            >
              <BsFillCartXFill className="mt-1 text-xs  md:text-lg" />
              <p className="text-xs md:text-lg">Clear Cart</p>
            </span>
          ) : (
            <span className="text-xs flex space-x-2 hover:text-crystamolPink  md:text-lg text-[#817181]">
              <BsCartFill className="mt-1 text-xs  md:text-lg" />
              <p className="text-xs md:text-lg">Cart</p>
            </span>
          )}
        </div>

        <div className="w-full bg-[#2B3039] text-gray-300 my-5 py-1 rounded-2xl h-auto">
          {/* cart items  */}
          {cartList.length === 0 ? (
            <div className="h-full px-2 lg:px-0 ">
              <div className="border mx-auto mt-2 lg:my-5 rounded-xl w-full lg:w-7/12 h-11/12 ">
                <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                  <GiShoppingCart className="text-7xl lg:text-9xl mb-5 text-gray-600" />
                  <p className="text-sm capitalize lg:text-lg text-gray-600 px-2 text-center">
                    You do not have any product on your cart
                  </p>

                  <button
                   
                    className="py-1 lg:py-3 hover:bg-[#0090A0] mt-16 px-8 lg:px-12 rounded-full bg-crystamolButton text-white text-sm lg:text-lg"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {cartList?.map((cart, index) => (
                <div key={index} >
                  <div className="flex my-5 ml-5 justify-between ">
                    <div className="flex ">
                      <img
                        alt="eeee"
                        // src={`${PRODUCT_IMAGE_URL}${cart?.productImage}`}
                        src='/assets/shoes11.png'
                        className="object-fill w-36 h-32 md:w-44 mr-5 md:h-36 rounded-md"
                      />
                      <div className="flex flex-col space-y-2 ">
                        <h3 className="text-md   md:text-2xl  mb-2">
                         Akpo
                        </h3>
                        <span className="flex space-x-5">
                          <p className="md:mb-14 text-xs md:text-sm  ">
                            {/* {cart?.sizeType.charAt(0).toUpperCase() + cart?.sizeType.slice(1)} */}
                          small
                          </p>
                          
                        </span>

                        <div className="text-crystamolPrice inline-block md:hidden mb-1  text-lg md:text-3xl font-semibold">
                          <span className="flex">
                            <p>
                              $
                            </p>
                            <p>
                             7655
                            </p>{" "}
                            :
                          </span>
                        </div>
                        <div className="md:hidden inline-block">
                          <div className="bg-crystamolBackground flex rounded-lg h-8 w-20  p-2 space-x-3 justify-center items-center ">
                            <span
                             
                               
                                  // setCartList(newCartList);
                                

                              
                                    
                              className="text-xl cursor-pointer -mt-1 hover:text-crystamolPink"
                            >
                              +
                            </span>

                            <span className="bg-white cursor-pointer px-2 my-1 rounded-md ">
                            1
                            </span>

                            <span
                             
                                    
                              className="text-2xl hover:text-crystamolPink -mt-2"
                            >
                              -
                            </span>
                          </div>
                        </div>
                        <span
                          
                          className="flex mt-10 text-gray-300 cursor-pointer hover:text-gray-200 space-x-2"
                        >
                          <RiDeleteBin6Line className="text-md md:text-lg" />
                          <span className="text-xs md:text-md">
                            Remove from cart
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="hidden md:inline-block">
                      <div
                        // onMouseLeave={}
                        className="bg-crystamolBackground flex rounded-lg h-10 w-24 mt-10 p-2 space-x-3 justify-center items-center "
                      >
                        <span
                         
                          className="text-xl cursor-pointer -mt-1 hover:text-crystamolPink"
                        >
                          +
                        </span>

                        <span className="bg-white px-2 my-1 rounded-md ">
                         1
                        </span>

                        <span
                         
                          className="text-2xl cursor-pointer hover:text-crystamolPink -mt-2"
                        >
                          -
                        </span>
                      </div>
                    </div>
                    <div className="text-crystamolPrice hidden md:inline-block mr-5 mt-10 text-lg md:text-3xl font-semibold">
                      <span className="flex">
                        <p>
                         $
                        </p>
                        <p>
                         60
                        </p>
                      </span>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}

              {/* cart  prices */}

              <div className="m-5 space-y-10">
                <div className="flex justify-between text-sm md:text-lg ">
                  <p>Subtotal</p>

                  <span className="flex">
                    <p>$</p>
                     
                    <p>54</p>
                  </span>
                </div>
                
                <div className="flex justify-between text-xl font-semibold">
                  <p>Total</p>
                  <span className="flex">
                    <p>$</p>
                    
                    <p>655</p>
                  </span>
                </div>
              </div>

              <hr />

              {/* checkout button */}

              <div className="flex justify-center m-4 md:justify-end md:m-10">
                <button
                  // onClick={() => {
                  //   router.push("/check-out");
                  //   setLoading(true);
                  // }}
                  className="bg-crystamolButton bg-gray-700 hover:bg-gray-600 py-3 px-10 md:px-28 md:py-4 text-white flex rounded-full "
                >
                 
                    <div className="flex">
                      <span>Procceed to Checkout</span>
                      <IoIosArrowForward className="mt-1 ml-2" />
                    </div>
                  
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart