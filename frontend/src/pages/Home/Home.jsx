import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreItems from '../../components/ExploreItems/ExploreItems'
import Itembox from '../../components/Itembox/Itembox'


const Home = () => {
  const [category,setCategory] = useState("All");
  
  return (
    
    <div>
      <Header/>
      <ExploreItems category={category} setCategory={setCategory}  />
      <Itembox category={category} />
      
    </div>
  )
}

export default Home
