import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {BASE_URL} from '../json/api'
import shopdata from '../json/data.json'



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






  useEffect(() => {
    const getProduct= ():void =>{
        axios.get(`${BASE_URL}products`)
        .then(res=>setProducts(res.data.data))
        .catch(err=>console.log(err))
    }

    getProduct()
   
  }, [])

  
  return (
      <div className="grid z-50 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-5 md:mx-auto mt-24  md:max-w-5xl">
      {products.map((item)=>
      <div>
        <Card {...item} />
      </div>)}

    </div>
  )
}

export default MainCompo