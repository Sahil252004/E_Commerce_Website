import React from 'react'
import './Footer.css'

import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="Section1">
        <div className="sect">
          <img src={assets.logo} alt="Shopcart Logo"/>
          <h3>Shopper</h3>
        </div>
        <br />
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        
      </div>
      
      <div className="Section2">
        <h2>Company</h2>
        <ul className='list-ele'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Get in Touch</a></li>
        </ul>
        
      </div>
      <div className="Section3">
        <h3>Get In Touch</h3>
        <ul className="social-icons">
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-github"></i></a></li>
        </ul>
  
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
