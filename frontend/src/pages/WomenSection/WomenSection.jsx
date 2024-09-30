import React from 'react'
import './WomenSection.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContextProvider'
import { useParams,Link } from 'react-router-dom'

const WomenSection = () => {
    const {product_list} = useContext(StoreContext);
    const {productId} = useParams();
    const product = product_list.find((e) => e.id === Number(productId));
  return (
    <>
    <h2 className='heading'>Women Section</h2>
    <div className='card-container'>
    
        {product_list.map((item,index) => {
            if(item.type === "Women")
            return (
                <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <Link to={`/itemContent/${item.id}`}><img  src={item.image} className="img-fluid rounded-start" alt="..."/></Link>
                        </div>
                        <div className="col-md-8">  
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        })}
    </div>
</>
  )
}

export default WomenSection
