import {react, useState} from 'react'
import Navbar from "./components/Navbar/Navbar"
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import ItemContent from './pages/ItemContent/ItemContent'
import MenSection from './pages/MenSection/MenSection'
import WomenSection from './pages/WomenSection/WomenSection'
import KidsSection from './pages/KidsSection/KidsSection'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  
  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/itemContent' element={<ItemContent/>}>
          <Route path=':productId' element={<ItemContent/>}></Route>
        </Route>
        <Route path='/MenSection' element={<MenSection/>}/>
        <Route path='/WomenSection' element={<WomenSection/>}/>
        <Route path='KidsSection' element={<KidsSection/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
