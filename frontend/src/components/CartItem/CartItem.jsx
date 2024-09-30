  import React, { useContext } from 'react'
  import './CartItem.css'

  import { StoreContext } from '../../context/StoreContextProvider'
  import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

  const CartItem = () => {
    const {cartItems,product_list,addToCart,removeFromCart,getTotalCartAmount,removeItem} = useContext(StoreContext);
    const navigate = useNavigate();
    return (
      <div className='cart-container'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            product_list.map((item,index) => {
              if(cartItems[item.id] > 0)
              {
                return (
                    <div key={index}>
                      <div  className="cart-items-title cart-items-item">
                        <img src={item.image}  alt="" />
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        <p className='cartitems-plus-minus'>
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(item.id)} alt="" />
                        {cartItems[item.id]}
                        <img src={assets.add_icon_green} onClick={()=>addToCart(item.id)} alt="" />
                        </p>
                        <p>₹{item.price*cartItems[item.id]}</p>
                        <img src={assets.shopping_minus_icon} onClick={()=>removeItem(item.id)} className='cross'></img>
                      </div>
                      <hr />
                    </div>
                    )
              }
            })
          }
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>  
              </div>
              <hr />
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 75}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <b>Total</b>
                <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 75}</b>
              </div>
              
            </div>
            <div>
              {getTotalCartAmount() !== 0 ? <button onClick={() => navigate('/placeOrder')}>PROCEED TO CHECKOUT</button> : <></>}
            </div>
              
            
            
          </div>
          
        </div>
      </div>
    )
  }

  export default CartItem;
