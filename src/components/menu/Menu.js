import React from 'react'
import { NavLink} from 'react-router-dom'
import './Menu.css'

const obj=[{name:'Trending',path:"/trending"},{name:'Electronics and Gadgets',path:"/electronics"},{name:'Homeappliances',path:"/homeappliances"},{name:'Outfits',path:"/outfit"},{name:'Books',path:"/books"}]

function Menu() {
  return (
    <div className='menu'>
        <ul className='menulist'>
          <li><NavLink className="menunavlink" to='/'><i class="fa fa-home" id='home'></i>
</NavLink></li>
          <li><i class="material-icons">local_grocery_store</i>
cart</li>
          <li><i class="material-icons">add</i>
Wishlist</li>
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