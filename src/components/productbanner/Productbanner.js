import React, { useEffect, useState } from 'react'
import './Productbanner.css'
import { useLocation } from 'react-router-dom'


function Productbanner(props) {
  const location=useLocation();
  const[obj,setObj]=useState({})
  useEffect(()=>{
      setObj(location.state.obj)
  },[obj])

  return (
    
    <div> <h2>{props.title}</h2>
    <div className="productbanner">
      <img className='productimage' src={obj.imgurl} alt="ProductImage"></img>
      <div className='productdiscription'>
        <label>Name:{obj?obj.name:''}</label>
        <label>Catogory:{obj.category}</label>
        <label>Price:{obj.price}</label>
        <label>Rating:{obj.rating}</label>
        <label>Description:{obj.description}</label>
        <div>
        <button className='btn productbannerbtn'><i class="material-icons" id='favorite'>favorite_border</i></button>
        <button className='btn productbannerbtn'><i class="fa fa-cart-plus"></i>
</button>
</div>

      </div>

    </div>
    </div>
  )
}

export default Productbanner