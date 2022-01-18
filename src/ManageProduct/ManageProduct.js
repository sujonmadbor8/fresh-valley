import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://mighty-falls-09792.herokuapp.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);

  const handleDelete = (event, id) => {
    console.log(event.target.id);
    fetch(`https://mighty-falls-09792.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          event.target.parentNode.style.display = "none";
        }
        console.log("deleted successfullty");
      });
  };

  // const productData = {
  //   name: data.name,
  //   price: data.price,
  //   weight: data.weight,
  // };

  // fetch(`https://mighty-falls-09792.herokuapp.com/deleteProduct`, {
  //   method: "delete",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(productData),
  // })
  //   .then((res) => {
  //     if (res.ok) return res.json();
  //   })
  //   .then((data) => {
  //     window.location.reload();
  //   });

  return (
    <TableContainer component={Paper} style={{ height: "100%" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="center">Weight</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="center">{product.weight}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
                <Button variant="contained">
                  <EditIcon style={{ color: "blue" }} />
                </Button>
                &nbsp;&nbsp;
                <Button
                  onClick={(event, id) => handleDelete(event, product._id)}
                  variant="contained"
                >
                  <DeleteForeverIcon style={{ color: "red" }} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
