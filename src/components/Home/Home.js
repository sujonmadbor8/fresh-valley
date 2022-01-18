import React, { useEffect, useState } from "react";
import Product from "./../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://mighty-falls-09792.herokuapp.com/products`)
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
