import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { productDetails } from '../features/shopSlice'
import { RootState } from '../features/store'
import { BASE_URL } from '../json/api'

type shopstuffs = {
  _id: string,
  productName: string,
  image: string,
  price: number,
  rating?: number,
  description?: string

}



const Card = ({ _id, productName, image, price }: shopstuffs) => {

  const user = useSelector((state: RootState) => state.shop.userData)
  const navigate = useNavigate()
  const dispatch=useDispatch()


  const addToCart = (): void => {
    if (user === null) {
      alert("Please login to add to cart");
      navigate('/login')
    } else {
      const data = {
        productId: _id,
        userId: user._id
      }
      axios.post(`${BASE_URL}create/cart`, data)
        .then(res => {
          if (res.data.status) {
            alert('item added to cart successfully')

          }
        })
    }

  }
  return (
    <div key={_id} className="bg-[#2B3039] p-3  rounded-lg w-full cursor-pointer">
      <img
        src={`data:image/png;base64,${image}`}
        alt=""
        className={
          "duration-300  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150    object-fill rounded-md hover:skew-y-6 w-full h-48 md:h-48"
        }
      onClick={() => {
        dispatch(productDetails(_id));
        navigate("/details");
      }}
      />


      <span className="text-base text-gray-300 flex justify-between items-center ">
        <p className="font-bold my-1">{productName}</p>
        <span className="flex">

          ${price}
        </span>
      </span>

      <button
        className="flex items-center space-x-3 justify-center bg-gray-700 hover:bg-gray-600 md:px-6 py-2  rounded-full  w-full mt-2"
        onClick={addToCart}
      >
        <span className="tracking-wider text-xs font-semibold text-gray-300 md:text-sm">
          {/*  */}
          Add to cart
        </span>
        {/* <MdKeyboardArrowRight className="h-5 w-5 text-white" /> */}
      </button>
    </div>
  )
}

export default Card