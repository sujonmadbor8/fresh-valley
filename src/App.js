import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Deals from "./components/Deals/Deals";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import Login from "./components/Login/Login";
import AddProduct from "./components/AddProduct/AddProduct";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: green[600],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%", width: "100%", paddingBottom: "20px" }}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Container>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <PrivateRoute exact path="/orders">
                  <Orders></Orders>
                </PrivateRoute>
                <PrivateRoute exact path="/admin">
                  <Admin></Admin>
                </PrivateRoute>
                <Route exact path="/deals" component={Deals} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/addProduct" />
                <PrivateRoute exact path="/checkOut/:id">
                  <CheckOut></CheckOut>
                </PrivateRoute>
                <Route path="*" component={NoMatch} />
              </Switch>
            </Router>
          </Container>
        </UserContext.Provider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
