import React, { useEffect, useState } from 'react'
import './Rowposter.css'
import { getTrending } from '../../Data'
import {useNavigate } from 'react-router-dom'
function Rowposter(props) {
const [data,setData]=useState([])
useEffect(()=>{

  getTrending('Trending','name','!=','').then((element)=>{
    element?setData(element):setData([])
    })
},[])

let navigate=useNavigate();


  return (
    <div className='rowposter'>
        <h2>{props.title}</h2>

        <div className='postercontainer'>
           {
           data.map((obj,index)=>{
              return(
                <div className='poster' key={index} onClick={()=>{
                  navigate('/trending',{state:{obj}})
                }}>
                <img src={obj.imgurl} id='posterimg' alt='POSTER'/>
                <div className='productdetails'> 
                <label>Name:{obj.name}</label>
                <label>Catagory:{obj.category}</label>
                <label>price:{obj.price}</label>
                <div><i class="material-icons">star_half</i><label>{obj.rating}</label></div>
                </div>
                {console.log(obj.name)}
                </div>
              )
            })
           }
        </div>
    </div>
  )
}
export default Rowposter