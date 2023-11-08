import React from 'react'
import Productbanner from '../components/productbanner/Productbanner'
import Rowposter from '../components/rowposter/Rowposter'

function Electronics() {
  return (
    <div>
        <Productbanner/>
        <Rowposter title="Similar products"/>
        <Rowposter title="Trending products"/>

    </div>
  )
}

export default Electronics