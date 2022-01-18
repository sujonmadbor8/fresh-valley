import { Box, Button, Fab } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const history = useHistory();
  const handleBuyProduct = (id) => {
    console.log("Buy Now");
    history.push(`/checkOut/${id}`);
  };

  return (
    <Box className="col-md-3 product">
      <div className="productHeader">
        <img
          style={{ height: "200px", width: "auto" }}
          src={product.imageURL}
          alt=""
        />
        <h3 style={{ padding: "0 10px" }}>
          {product.name} - {product.weight}
        </h3>
      </div>
      <div className="productFooter">
        <h3>${product.price}</h3>
        <Fab
          onClick={() => handleBuyProduct(product._id)}
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
        >
          {/* <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/checkOut"
          >
            Buy Now
          </Link> */}
          Buy Now
        </Fab>
      </div>
    </Box>
  );
};

export default Product;
