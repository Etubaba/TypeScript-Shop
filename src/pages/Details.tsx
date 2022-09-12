import axios from "axios";
import React,{useEffect,useState} from "react";
import { GrStar } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../features/store";
import { BASE_URL } from "../json/api";

const Details = () => {
  const [product,setProduct]=useState<string |any>('')

const productId=useSelector((state: RootState)=>state.shop.productId)

const user = useSelector((state: RootState) => state.shop.userData)
const navigate = useNavigate()





useEffect(() => {

  const getProduct = async() => {
    axios.get(`${BASE_URL}product/${productId}`)
    .then(res=>setProduct(res.data.data))
  }

  getProduct()
 
}, [])


  const addToCart = (): void => {
    if (user === null) {
      alert("Please login to add to cart");
      navigate('/login')
    } else {
      const data = {
        productId: product._id,
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
console.log(product)
  return (
    <div className="h-screen mx-4 md:mx-16 ">
      <div className="bg-[#2B3039] mt-10 z-40 rounded-md shadow-md p-5 md:p-10 md:flex-row  flex-col-reverse flex">
        <div className="md:w-1/2 w-full h-96 flex-col  flex p-3 space-y-2">
          <div className="mt-28 flex flex-col space-y-3">
            <p className="capitalize text-gray-300 font-bold ">
             {product?.productName}
            </p>
            <span className="flex space-x-1 mt-1 ">
              {" "}
              {[1, 2, 3, 4, 5].map((star, i) => (
                <GrStar className={product?.rating >= star? "text-yellow-300": 'text-gray-400'} />
              ))}
            </span>
            <p className="w-[90%] text-gray-300">
             {product?.description}
            </p>
            <p className="text-gray-300 text-xl">${product?.price}</p>


             <button
        className="flex items-center space-x-3 justify-center bg-gray-700 hover:bg-gray-600 md:px-6 py-2  rounded-full w-full md:w-1/2 mt-2"
       onClick={addToCart}
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
          src={`data:image/png;base64,${product?.image}`}
          alt=""
          className="md:w-1/2 w-full z-40 h-96 object-fill  duration-300 rounded-lg hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
        />
      </div>
    </div>
  );
};

export default Details;
