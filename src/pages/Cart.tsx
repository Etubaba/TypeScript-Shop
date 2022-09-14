import React, { useEffect, useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import{MdKeyboardBackspace } from 'react-icons/md'
import{GiShoppingCart } from 'react-icons/gi'
import{RiDeleteBin6Line} from 'react-icons/ri' 
import{BsFillCartXFill,BsCartFill} from 'react-icons/bs'
import { RootState } from '../features/store'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../json/api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface ICart {
  _id: string,
  useId: string,
  productId: string,
  productName: string,
  price: number,
  image: string,
}


const Cart = () => {
    const [cartList, setCartList] = useState<ICart[]>([])
   // const[cartId,setCartId]=useState<string>('')


  const user = useSelector((state: RootState) => state.shop.userData)
  const navigate= useNavigate()

  useEffect(() => {


    const getCart = async (): Promise<void> => {
      if (user)
       await axios.get(`${BASE_URL}user/cart/${user._id}`)
          .then(res => setCartList(res.data.data))

    }

    getCart()
  }, [])

const totalPrice:number=cartList?.reduce((acc,cart)=>{
  acc += cart.price;
  return acc

},0 )

const clearCart =async ():Promise<void> =>{
await axios.post(`${BASE_URL}clear/user/cart/${user?._id}`,{})
.then(res=>{
  if(res.data.status){
    alert('Cart items cleared successfully')
  }
})
}
const deleteItem =async (cartId:string):Promise<void> =>{
await axios.post(`${BASE_URL}delete/cartitem`,
{
  userId:user?._id,
  cartId,
})
.then(res=>{
  if(res.data.status){
    alert('Cart item deleted successfully')
  }
})
}




  return (
    <div className=''>

      <div className="md:max-w-5xl mx-5 md:mx-auto">
        <div className="flex justify-between mt-5">
          <span
          onClick={()=>navigate('-1')}
            className="flex  text-gray-300 hover:text-crystamolPink mt-1 space-x-1"
          >
            <MdKeyboardBackspace className="mt-[0.37rem] text-xs  md:text-lg" />{" "}
            <p className="text-xs md:text-lg">Back</p>
          </span>
          {cartList.length !== 0 ? (
            <span
              onClick={clearCart}
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

        <div className="w-full bg-[#2B3039] shadow-md text-gray-300 my-5 py-1 rounded-2xl h-auto">
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
                   
                    className="py-1 lg:py-3  mt-16 px-8 lg:px-12 rounded-full bg-[#374151] text-white text-sm lg:text-lg"
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
                      
                          src={`data:image/png;base64,${cart.image}`}
                        // src='/assets/shoes11.png'
                        className="object-fill w-36 h-32 md:w-44 mr-5 md:h-36 rounded-md"
                      />
                      <div className="flex flex-col space-y-2 ">
                        <h3 className="text-md   md:text-2xl  mb-2">
                        {cart.productName}
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
                            {cart.price}
                            </p>{" "}
                            :
                          </span>
                        </div>
                      
                        <span
                          onClick={()=>deleteItem(cart._id)}
                          className="flex mt-10 text-gray-300 cursor-pointer hover:text-gray-200 space-x-2"
                        >
                          <RiDeleteBin6Line className="text-md md:text-lg" />
                          <span className="text-xs md:text-md">
                            Remove from cart
                          </span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-crystamolPrice hidden md:inline-block mr-5 mt-10 text-lg md:text-3xl font-semibold">
                      <span className="flex">
                        <p>
                         $
                        </p>
                        <p>
                         {cart.price}
                        </p>
                      </span>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}

              {/* cart  prices */}

              <div className="m-5 space-y-10">
               
                
                <div className="flex justify-between text-xl font-semibold">
                  <p>Total</p>
                  <span className="flex">
                    <p>$</p>
                    
                    <p>{totalPrice}</p>
                  </span>
                </div>
              </div>

              <hr />

              {/* checkout button */}

              <div className="flex justify-center m-4 md:justify-end md:m-10">
                <button
                  onClick={()=>navigate('/checkout')}
                 
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