import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { BASE_URL } from '../json/api'
import shopdata from '../json/data.json'

const Search = () => {

    const [products,setProducts]=useState<Iproduct[]>([])

    const [search,setSearch]=useState<string>('')


interface Iproduct {
  _id: string
  image: string,
  productName: string,
  price: number,
  description: string,
  rating: number,

}



  useEffect(() => {
    const getProduct= ():void =>{
        axios.get(`${BASE_URL}products`)
        .then(res=>setProducts(res.data.data))
        .catch(err=>console.log(err))
    }

    getProduct()
   
  }, [])


  const filteredProducts=products.filter(product =>{
    if(search===''){
      return product
    }else if(product.productName.toLocaleLowerCase()
    .includes(search.toLocaleLowerCase())){
      return product;
    }
  })

     return (
        <div>
        <div className='mx-auto max-w-5xl mt-10 w-[90%]  md:w-[60%] '>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} type='text' className='w-full z-50  rounded-full p-4 outline-none text-white bg-[#2B3039]' placeholder='Search for a Product here   '/>
        </div>
      <div className="grid z-50 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-5 md:mx-auto mt-24  md:max-w-5xl">
      {filteredProducts.map((item)=>
      <div>
        <Card {...item} />
      </div>)}

    </div>
    </div>
  )
}

export default Search