import React from 'react'

type shopstuffs={
  _id:string,
  productName: string,
  image: string,
  price: number,
  rating?: number,
  description?: string
  
}



const Card= ({_id,productName,image,price}:shopstuffs) => {
  return (
    <div key={_id} className="bg-[#2B3039] p-3  rounded-lg w-full cursor-pointer">
      <img
        src={`data:image/png;base64,${image}`}
        alt=""
        className={
          "object-fill rounded-md w-full h-48 md:h-48"
        }
        // onClick={() => {
        //   dispatch(catClicked(item.id));
        //   router.push("/categoryproducts");
        // }}
      />

     
      <span className="text-base text-gray-300 flex justify-between items-center ">
        <p className="font-bold my-1">{productName}</p>
        <span className="flex">
       
         ${price}
        </span>
      </span>

      <button
        className="flex items-center space-x-3 justify-center bg-gray-700 hover:bg-gray-600 md:px-6 py-2  rounded-full  w-full mt-2"
       
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