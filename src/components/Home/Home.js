import React, { useEffect, useState } from "react";
import Product from "./../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);
  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Home;
