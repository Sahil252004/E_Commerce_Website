import React, { useContext } from "react";
import "./Itembox.css";

import ProductItem from "../ProductItem/ProductItem";
import { StoreContext } from "../../context/StoreContextProvider";
import { Link } from "react-router-dom";
const Itembox = ({category}) => {
  const {product_list} = useContext(StoreContext);
  return (
    <div className="item-container">
      <h1>Products</h1>
      <div className="product-category-wrap" >
        {product_list.map((item, index) => {
          if(category === "All" || category === item.category)
          return (
             
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default Itembox;
