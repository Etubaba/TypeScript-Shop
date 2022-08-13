import React from 'react'
import Card from '../components/Card'
import shopdata from '../json/data.json'

const MainCompo = () => {
  return (
      <div className="grid z-50 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-24  max-w-5xl">
      {shopdata.map((item)=>
      <div>
        <Card {...item} />
      </div>)}

    </div>
  )
}

export default MainCompo