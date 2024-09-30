import React from 'react'
import './ExploreItems.css'
import { item_list } from '../../assets/assets'
const ExploreItems = ({category,setCategory}) => {
  return (
    <div className='explore-items'>
      <h1>
            Shop Our Top Categories
      </h1>
      <div className='shop-category-wrap'>
          {
            item_list.map((item,index) => {
              return (
                <div onClick={()=>setCategory(prev=>prev===item.item_name?"All":item.item_name)} key={index} className="shop-category-single-item">
                <h3>{item.item_name}</h3>
                <img className={category===item.item_name?"active":""} src={item.item_image} 
                loading="lazy" alt="" id="category-image"
                 />
                    
            </div>
            
              )
            })
          }
            
      </div>
    </div>
  )
}

export default ExploreItems
