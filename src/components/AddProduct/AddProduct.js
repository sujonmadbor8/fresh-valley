import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      imageURL: imageURL,
    };
    const url = `https://mighty-falls-09792.herokuapp.com/addProduct`;
    console.log(data);
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    }).then((response) => console.log("server side response"));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "85d4a14ebee027466b740d2b9599bb7f");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "70vh" }}>
      <input placeholder="Enter Product name" {...register("name")} />
      <br />
      <br />
      <input placeholder="Enter Product price" {...register("price")} />
      <br />
      <br />
      <input placeholder="Enter Product weight" {...register("weight")} />
      <br />
      <br />
      <input
        {...register("Image name")}
        type="file"
        onChange={handleImageUpload}
      />
      <br />
      <input type="submit" style={{ cursor: "pointer" }} />
    </form>
  );
};

export default AddProduct;
