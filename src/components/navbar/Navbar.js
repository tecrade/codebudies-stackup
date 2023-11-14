
import './Navbar.css'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'
function Navbar() {
  const{menuflag,setMenuflag}=useContext(AppContext)
  return (
    <div className='header'>
        <i class="material-icons" id='menubtn' onClick={()=>{
          menuflag?setMenuflag(false):setMenuflag(true)
        }}>menu</i>
        <label className="logo">Minekart</label>
        <i class="fa fa-cart-plus" id='cart'></i><label id='cartnum'>0</label>
        <i class="material-icons" id='favorite'>favorite_border</i>
        <button className='btn login'>Sign in</button><i class="material-icons" id='person'>perm_identity</i>
    </div>
  )
}

export default Navbar