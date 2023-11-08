import React from 'react'
import './Productbanner.css'

function Productbanner() {
  return (
    <div classname="productbanner">
      <img className='productimage' src="" alt="Product Image"></img>
      <div className='productdiscription'>
        <label>Name:</label>
        <label>Catogory:</label>
        <label>Price:</label>
        <label>Rating:</label>
        <label>Discription:</label>
        <button><i class="material-icons" id='favorite'>favorite_border</i></button>
        <button><i class='fas fa-shopping-cart'></i></button>

      </div>
    </div>
  )
}

export default Productbanner