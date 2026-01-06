import React from "react";
import { useState,useEffect } from "react";

function Products() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://ecommerece-with-backend1.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data))
      .catch((err)=>console.log(err))
      
  }, []);

  return (
    <>
      <h1>ecommerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(function (p) {
          return (
            <div key={p.id}>
              <img src={p.image} alt="" width={150} />
              <p>{p.title}</p>
              <p>{p.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;
