import React from 'react'
import { assets } from '../../assets/assets'
import './ProductItem.css'
import { Link } from 'react-router-dom'
const ProductItem = ({id,name,category,image,price}) => {
  return (
    <div className='product-item'>
        <div className="product-item-container">
            <Link to={`/itemContent/${id}`}> <img className='product-item-img' src={image} alt="" /></Link>
        </div>
        <div className="product-item-info">
            <div className="product-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            
            <p className="product-item-price">₹{price}</p>

        </div>
    </div>
    
  )
}

export default ProductItem
