import React from 'react'
import Rowposter from '../components/rowposter/Rowposter'
import Banner from '../components/banner/Banner'
function Home() {
  return (
    <div>
        <Banner/>
        <Rowposter title='Suggestions for you'/>
        <Rowposter title='Best deals '/>
        <Rowposter title='Trending Products'/>
        <Rowposter title='Home and kitchen'/>
    </div>
  )
}

export default Home