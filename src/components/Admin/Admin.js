import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "./../../ManageProduct/ManageProduct";

function Admin(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Admin.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", textAlign: "center" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "white",
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ color: "white" }}
            label="Manage Product"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: "white" }}
            label=" Add Product"
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: "white" }}
            label="Edit Product"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <Admin value={value} index={0}>
        <ManageProduct />
      </Admin>
      <Admin value={value} index={1}>
        <AddProduct />
      </Admin>
      <Admin value={value} index={2}>
        Item Three
      </Admin>
    </Box>
  );
}

// import { Box, Button } from "@mui/material";
// import React from "react";
// import "./Admin.css";
// import { Paper } from "@material-ui/core";
// import ViewComfySharpIcon from "@mui/icons-material/ViewComfySharp";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import { Link } from "react-router-dom";
// import AddProduct from "../AddProduct/AddProduct";

// const Admin = () => {
//   return (
//     <Box>
//       <Paper>
//         <div className="adminStyle" style={{ height: "600px" }}>
//           <div
//             className="col-md-3 "
//             style={{
//               width: "25%",
//               padding: "0 30px",
//               marginLeft: "-45px",
//               backgroundColor: "#519B9D",
//             }}
//           >
//             <h2 style={{ fontSize: "25px" }}> FRESH VALLEY</h2>

//             <Button>
//               <span className="btnStyle">
//                 <ViewComfySharpIcon />
//                 &nbsp;&nbsp;&nbsp; Manage Product
//               </span>
//             </Button>
//             <Button>
//               <Link to="/addProduct" style={{ textDecoration: "none" }}>
//                 <span className="btnStyle">
//                   <AddIcon />
//                   &nbsp;&nbsp;&nbsp; Add Product
//                 </span>
//               </Link>
//             </Button>
//             <Button>
//               <span className="btnStyle">
//                 <EditIcon />
//                 &nbsp;&nbsp;&nbsp; Edit Product
//               </span>
//             </Button>
//           </div>
//           <div
//             className="col-md-9"
//             style={{
//               width: "100%",
//               padding: "20px 50px",
//             }}
//           >
//             <AddProduct></AddProduct>
//           </div>
//         </div>
//       </Paper>
//     </Box>
//   );
// };

// export default Admin;
