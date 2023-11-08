import React from 'react'
import { useState } from 'react'
import './Rowposter.css'
const obj=[{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'},{img:'/home/tecrade/Desktop/stackup/minekart/src/resources/prof1.jpg'}]
function Rowposter(props) {
    const[poster]=useState(obj)
  return (
    <div className='rowposter'>
        <h2>{props.title}</h2>
        <div className='postercontainer'>
           {
            poster.map((obj,index)=>{
              return(
                <div className='poster'>
                <img   key={index} src={obj.img} alt='POSTER'/>
                <div className='productdetails'> 
                <label>Name</label>
                <label>Catagory</label>
                <label>price</label>
                <div><i class="material-icons">star_half</i><label>4.5</label></div>



                </div>
                </div>
              )
            })
           }
        </div>
    </div>
  )
}

export default Rowposter