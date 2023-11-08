import React from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import Productbanner from '../components/productbanner/Productbanner'
function Homeappliances() {
  return (
    <div>
        <Productbanner title="Homeappliances"/>
        <Rowposter title="Similar products"/>
        <Rowposter title="Trending products"/>
    </div>
  )
}

export default Homeappliances