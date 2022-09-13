import axios from 'axios'
import { useState, useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { BASE_URL } from '../json/api'

interface ICart {
  _id: string,
  useId: string,
  productId: string,
  productName: string,
  price: number,
  image: string,
}
const CheckOut = () => {
  const [cartList, setCartList] = useState<ICart[]>([])


  const user = useSelector((state: RootState) => state.shop.userData)

  useEffect(() => {


    const getCart = async (): Promise<void> => {
      if (user)
        axios.get(`${BASE_URL}user/cart/${user._id}`)
          .then(res => setCartList(res.data.data))

    }

    getCart()
  }, [])

const totalPrice:number=cartList?.reduce((acc,cart)=>{
  acc += cart.price;
  return acc

},0 )
  // const cartList:number[] = [1,2,3]
  return (
    <div className="flex justify-center items-center">
      <div className="w-full bg-[#2B3039]  z-40 mt-12 text-gray-300 rounded-xl mx-5  md:w-[70%] lg:w-[45%] md:mx-auto">
        <div className="bg-bellefuBackground rounded-lg pt-3">
          <section className="px-3 py-2">
            <h2 className="font-semibold text-sm md:text-lg font-poppins">
              Order Summary
            </h2>
          </section>
          <hr />
          {cartList?.map((cart, index) => (
            <div key={index}>
              <section className="flex justify-between px-3 py-2">
                <div className="flex space-x-3">
                  <div>
                    <img
                   src={`data:image/png;base64,${cart.image}`}
                      // src='/assets/wave1.png'
                      alt="order image"
                      width={100}
                      height={100}
                      className="rounded-md   duration-300  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
                    />
                  </div>
                  <div className="w-auto">
                    <p className="font-light mt-5 ml-5 text-base md:text-xl">
                      {cart.productName}
                 
                    </p>

                    {/* <div className="md:hidden  text-bellefuOrange">
                            <span className="flex">
                              <p>$34</p>
                            </span>
                          </div> */}
                  </div>
                </div>
                <div className=" py-5 text-bellefuOrange">
                  <span className="flex">
                    <p>${cart.price}</p>
                  </span>
                </div>
              </section>
              <hr />
            </div>
          ))}
          {/* <section className="flex px-3 py-4 border-b">
                  <div className="font-semibold text-lg md:text-2xl mr-auto">
                    Shippin Fee
                  </div>
                  <div className="font-semibold text-lg md:text-2xl text-bellefuOrange">
                    <span className="flex">
                      <p>${shippingFee}</p>
                    </span>
                  </div>
                </section> */}

          <section className="flex px-3 py-4">
            <div className="font-semibold text-lg md:text-2xl mr-auto">
              Total
            </div>
            <div className="font-semibold text-lg md:text-2xl text-bellefuOrange">
              <span className="flex">
                <p>${totalPrice}</p>
              </span>
            </div>
          </section>


          <div className="flex justify-center pb-5 m-4 md:justify-end md:m-10">
            <button
              // onClick={() => {
              //   router.push("/check-out");
              //   setLoading(true);
              // }}
              className="bg-crystamolButton bg-gray-700 hover:bg-gray-600 py-3 px-10 md:px-28 md:py-4 text-white flex rounded-full "
            >

              <div className="flex">
                <span>Check Out</span>
                <IoIosArrowForward className="mt-1 ml-2" />
              </div>

            </button>
          </div>




        </div>
      </div></div>
  )
}

export default CheckOut