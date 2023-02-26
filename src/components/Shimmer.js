import React from 'react'
import "./Shimmer.css"
import { restaurantList } from "../contants";

function Shimmer() {

  return (
    <>
    {restaurantList.map((shimmerItems,index)=>(
      <div key={index} className='shimmer-Box'>
      <div className='shimmer-img'></div>
        <div className='shimmer-txt'></div>
        <div className='shimmer-Ltxt'></div>
        <div className='shimmer-stxt'></div>
      </div>
    ) 
     
        
    
    
    )
}
        


   
    </>
  )
}

export default Shimmer;