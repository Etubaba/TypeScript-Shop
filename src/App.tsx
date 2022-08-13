import React from "react"
import { Route, Routes } from "react-router-dom"

import Card from "./components/Card"
import Nav from "./components/Nav"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import Details from "./pages/Details"
import Login from "./pages/Login"
import MainCompo from "./pages/MainCompo"
import Register from "./pages/Register"


const App:React.FC=() =>{



  return (
    <div className="bg-[#272b34] pb-20">
    <Nav/>
    <p className="text-[10vw] text-[#2d343e] z-0  left-[30%] absolute top-[10%]">TS-Shop</p>
   
    <Routes>
      <Route path="/" element={<MainCompo/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>


    </div>
  )
}

export default App
