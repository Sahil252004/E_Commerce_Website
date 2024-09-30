import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
  
  const [currState,setCurrState] = useState('Login');


return (
  <div className="login-popup">
    
      <form>
        <div className="login-form">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        {currState === 'Login'?<p className='chota-title'>Login to your Account</p>:<p className='chota-title'>Sign Up here</p>}
        
        {currState === 'Login'?<></>:<input className='in' id="name" name="name" placeholder='Name' required/>}
        <input className='in' type="email" id="email" name="email" placeholder='Email' required/>
        
        <input className='in' type="password" id="password" name="password" placeholder='Password' required/>
        <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>I am not a robot</p>
        </div>
        <div className='btn-section'>
          <button type="submit">{currState}</button>
          <button>Reset</button>
        </div>
        {currState === 'Login' ? <p onClick={()=>setCurrState("Sign Up")} className='last-text'>Don't have an Account ?</p>:<p onClick={()=>setCurrState("Login")} className='last-text'>Already have an Account ?</p>}
        
        </div>
      </form>
    
  </div>
);

  
}

export default LoginPopup
