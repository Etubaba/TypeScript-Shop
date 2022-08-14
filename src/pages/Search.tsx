import React from 'react'
import Card from '../components/Card'
import shopdata from '../json/data.json'

const Search = () => {

     return (
        <div>
        <div className='mx-auto max-w-5xl mt-10 w-[90%]  md:w-[60%] '>
            <input type='text' className='w-full z-50  rounded-full p-4 outline-none text-white bg-[#2B3039]' placeholder='Search for a Product here   '/>
        </div>
      <div className="grid z-50 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-5 md:mx-auto mt-24  md:max-w-5xl">
      {shopdata.map((item)=>
      <div>
        <Card {...item} />
      </div>)}

    </div>
    </div>
  )
}

export default Search