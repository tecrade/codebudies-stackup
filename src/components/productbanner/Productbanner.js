import React from 'react'
import './Productbanner.css'

function Productbanner(props) {
  return (
    <div> <h2>{props.title}</h2>
    <div className="productbanner">
      <img className='productimage' src="" alt="ProductImage"></img>
      <div className='productdiscription'>
        <label>Name:</label>
        <label>Catogory:</label>
        <label>Price:</label>
        <label>Rating:</label>
        <label>Discription:</label>
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