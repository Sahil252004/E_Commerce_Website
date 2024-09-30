import React, { useState , useContext , useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import './ItemContent.css'

import { StoreContext } from '../../context/StoreContextProvider';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';


const ItemContent = ({selectedId}) => {
  
  const {product_list} = useContext(StoreContext);
  const {productId} = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const product = product_list.find((e) => e.id === Number(productId));
  return (
    <ProductDisplay product={product}/>
  );
};

export default ItemContent;
