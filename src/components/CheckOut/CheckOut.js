import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@material-ui/core";
import { UserContext } from "./../../App";
import { Box } from "@mui/material";

const CheckOut = () => {
  const { id } = useParams();
  // console.log(id);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);
  // console.log(products);
  return (
    <div style={{ height: "85vh" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Quantity
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(
              (product) =>
                id === product._id && (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name} - {product.weight}
                    </TableCell>
                    <TableCell align="center">1</TableCell>

                    <TableCell align="right">{product.price}</TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
        <hr />

        <Box textAlign="right">
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "0 10px 10px 0" }}
          >
            CheckOut
          </Button>
        </Box>
      </TableContainer>
    </div>
  );
};

export default CheckOut;
