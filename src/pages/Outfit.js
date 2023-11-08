import React from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import Productbanner from '../components/productbanner/Productbanner'
function Outfit() {
  return (
    <div>
        <Productbanner/>
        <Rowposter title="Similar products"/>
        <Rowposter title="Trending products"/>
    </div>
  )
}

export default Outfit