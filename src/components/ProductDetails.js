import React from 'react'
import "./productdetails.css"
import { FaStar } from "react-icons/fa"

const ProductDetails = ({items}) => {
  return (
    <div className="productdetails">
      <div className="row">
      <div className='col-md-6'>
        <img className='main' src={`http://localhost:8000/${items?.Photo}`} alt="food" />
        
      <div className="d-flex justify-content-center  gap 2">
       <img src="./../../Rectangle6.png" alt="food" />
       <img src="./../../Rectangle6.png" alt="food" />
       <img src="./../../Rectangle6.png" alt="food" />
       </div>
       </div>
     <div className='col-md-6'>
      <h6 className='title'>{items?.title}</h6>
      <p>{items?.amount}</p>
      <div className="d-flex">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>

      </div>

      <div className="mt-4">
        <h6 >Select Quantity</h6>
        <div className='d-flex'>
          <button className='btn btn-sm btn-primary'>+</button>
          <input type="text" disabled/>
          <button className='btn btn-sm btn-primary'>-</button>
        </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default ProductDetails