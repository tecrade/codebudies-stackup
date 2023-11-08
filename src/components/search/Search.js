import React from 'react'
import './Search.css'
function Search() {
  return (
    <div className='container'>
      <div className='search'>
        <input  type="search" placeholder=' search for products'/><i class="material-icons">search</i>
      </div>
    </div>
  )
}

export default Search