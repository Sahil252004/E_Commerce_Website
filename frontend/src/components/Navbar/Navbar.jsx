import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar'>
      <Link to='/'>
      <div className='logo'>
        <img src={assets.logo} alt="" />
        <div>SHOPPER</div>
      </div>
      </Link>
      <ul className='navbar-menu'>
      <Link to='/'><li>Home</li></Link>
      <Link to='/MenSection'><li>Men</li></Link>
      <Link to='/WomenSection'><li>Women</li></Link>
      <Link to='/KidsSection'><li>Kids</li></Link>
      </ul>
      <div className='search-bar'>
            <input type="text" placeholder="Search Snippet"/>
            <button type="submit">🔍</button>
      </div>
      <div className='login_account'>
        <div className='account'>
          <img src={assets.profile} alt="" />
          <div onClick={()=>setShowLogin(true)}>Account</div>
        </div>
        <Link to='/cart'><div className='cart'>
          <img src={assets.cart_icon} alt="" />
          Cart
        </div></Link>
      </div>

    </div>
  )
}

export default Navbar
