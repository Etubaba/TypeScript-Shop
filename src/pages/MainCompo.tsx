import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {BASE_URL} from '../json/api'
import {useFetch} from '../hooks/useFetch'





interface Iproduct {
  _id: string
  image: string,
  productName: string,
  price: number,
  description: string,
  rating: number,

}
const MainCompo = () => {
  const [products,setProducts]=useState<Iproduct[]>([])



//const {fetchData,loading}=useFetch(`${BASE_URL}products`)


  useEffect(() => {
    const getProduct= ():void =>{
        axios.get(`${BASE_URL}products`)
        .then(res=>setProducts(res.data.data))
        .catch(err=>console.log(err))
    }

    getProduct()
   
  }, [])

  
  return (
    <>

    {products.length===0 ?
    <div className='flex justify-center h-screen items-center'>
<p className="text-[10vw] text-[#2d343e] z-[0] left-[30%] absolute top-[14%]">Loading...</p>
    </div>:
      <div className="grid z-50 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-5 md:mx-auto mt-24  md:max-w-5xl">
      {products.map((item ,idx)=>
      <div>
        <Card key={idx} {...item} />
      </div>)}

    </div>}
    
    </>
  )
}

export default MainCompo