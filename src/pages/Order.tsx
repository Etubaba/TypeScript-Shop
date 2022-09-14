
import { GiShoppingCart } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { useFetch } from '../hooks/useFetch'
import { BASE_URL } from '../json/api'

function Order() {

  const userId = useSelector((state: RootState) => state.shop.userData?._id)
  const { fetchData, loading } = useFetch(`${BASE_URL}user/order/${userId}`)
  return (
    <div className='md:max-w-5xl md:mx-auto mx-10'>
      <div>
        {fetchData.length === 0 ?
          <div className="h-full px-2 lg:px-0 ">
            <div className="border mx-auto mt-2 lg:my-5 rounded-xl w-full lg:w-7/12 h-11/12 ">
              <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                <GiShoppingCart className="text-7xl lg:text-9xl mb-5 text-gray-600" />
                <p className="text-sm capitalize lg:text-lg text-gray-600 px-2 text-center">
                  You do not have any order yet,place order
                </p>

                <button

                  className="py-1 lg:py-3  mt-16 px-8 lg:px-12 rounded-full bg-[#374151] text-white text-sm lg:text-lg"
                >
                  Home
                </button>
              </div>
            </div>
          </div> :
          <>
            {fetchData.map((order) =>
              <div key={order._id} className='bg-[#2B3039] shadow-md flex flex-col md:flex-row md:justify-between md:items-center  rounded-md p-5 my-7 w-full h-auto '>
                <div className='flex md:flex-row flex-col md:space-x-7'>
                  <div className='bg-[#374151] md:mb-0 mb-5 md:h-44 w-full md:w-44 rounded-md flex justify-center shadow-sm items-center'>
                    <img
                      alt=''
                      src={`data:image/png;base64,${order.image}`}
                      // src='/assets/sup.png'
                      className='h-52  md:h-40 md:w-40 w-full'
                    />
                  </div>
                  <div>
                    <p className='md:text-5xl text-3xl mb-4 lg:mb-10 text-white'>{order.productName}</p>

                    <p className='text-white '>{order.status}</p>
                  </div>

                </div>
                <p className='text-4xl text-white'>
                  ${order.price}
                </p>

              </div>)

            }
          </>

        }
      </div>






    </div>
  )
}

export default Order