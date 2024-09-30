import React, { useContext } from 'react'
import './ProductDisplay.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContextProvider';


const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(StoreContext);
  return (
    <div className="container">
       

        <div className="product-main-image">
            <div><img src={product.image} alt="Main Product Image"/></div>
            <div className="actions">
                <button onClick={() => addToCart(product.id)} className="add-to-cart">Add to Cart</button>
                {/* <button className="buy-now">Buy Now</button> */}
            </div>
        </div>

    <div className="product-details">
      <h1>{product.name}</h1>
      <p className="price">₹{product.price}</p>
      <p>Inclusive of all taxes</p>
      <p className="ratings">4.0 <img src={assets.rating_starts} alt="" />  <span>13,647 ratings</span>  | <span>374 reviews</span> </p>
        <p className='best-seller-text'>Best Seller</p>
        <hr />

      <div className="size-options">
        <p>Size</p>
        <div className="sizes">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
      </div>

      <hr />

      <div className="offers">
        <b>Available offers</b>
        <ul>
          <li>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
          <li>Bank Offer: 10% off on up to ₹1,500 on HDFC Bank Credit Card Transactions</li>
          <li>Bank Offer: 10% off up to ₹1,750 on HDFC Bank Credit Card EMI Transactions</li>
          <li>Special Price: Get extra 13% off</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ProductDisplay
