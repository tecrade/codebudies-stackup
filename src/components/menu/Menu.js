import React from 'react'
import { NavLink} from 'react-router-dom'
import './Menu.css'

const obj=[{name:'Home',path:"/"},{name:'Trending',path:"/trending"},{name:'Electronics and Gadgets',path:"/electronics"},{name:'Homeappliances',path:"/homeappliances"},{name:'Outfits',path:"/outfit"},{name:'Books',path:"/books"}]

function Menu() {
  return (
    <div className='menu'>
        <ul className='menulist'>
          <li>Home</li>
          <li>Cart</li>
          <li>Whishlist</li>
        </ul>
        <hr></hr>
        <h3>Catogories</h3>
        <ul className='menulist'>
            {
                obj.map((obj,index)=>{
                 return(
                    <li key={index}> <NavLink className="menunavlink" to={obj.path}>{obj.name}</NavLink>
                    </li>
                 )
                })
            }
        </ul>
        <hr></hr>
        <h3>Administration</h3>
        <ul className='menulist'>
            <li>Add products</li>
        </ul>
      
    </div>
  )
}

export default Menu