import React from 'react'
import Productbanner from '../components/productbanner/Productbanner'
import Rowposter from '../components/rowposter/Rowposter'
function Trending() {
  return (
    <div>
        <Productbanner title="Trending"/>
        <Rowposter title="Similar products"/>
        <Rowposter title="Trending products"/>
    </div>
  )
}

export default Trending