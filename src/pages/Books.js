import React from 'react'
import Productbanner from '../components/productbanner/Productbanner'
import Rowposter from '../components/rowposter/Rowposter'
function Books() {
  return (
    <div>
        <Productbanner title="Books"/>
        <Rowposter title="Similar products"/>
        <Rowposter title="Trending products"/>
    </div>
  )
}

export default Books