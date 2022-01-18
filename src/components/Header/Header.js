import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "./../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser);
  const { email, photoURL } = loggedInUser;
  // console.log(photoURL);
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const photoStyle = {
    width: "40px",
    borderRadius: "25px",
    border: "2px solid violet",
  };
  return (
    <div className={classes.root} style={{ paddingBottom: "80px" }}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" component="p" className={classes.title}>
              Super Shop
            </Typography>
            {isMobile ? (
              <>
                <IconButton
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/home"
                  >
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/orders"
                  >
                    <Typography variant="h6">Orders</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/admin"
                  >
                    <Typography variant="h6"> Admin</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/deals"
                  >
                    <Typography variant="h6">Deals</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchor(null)}>
                    {email ? (
                      <Button
                        style={{ marginLeft: "8px" }}
                        variant="contained"
                        color="secondary"
                        size="small"
                      >
                        LogOut
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        component={Link}
                        to="/login"
                      >
                        Login
                      </Button>
                    )}
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem" }}>
                <Button variant="text" component={Link} to="/home">
                  Home
                </Button>
                <Button variant="text" component={Link} to="/orders">
                  Orders
                </Button>
                <Button variant="text" component={Link} to="/admin">
                  Admin
                </Button>
                <Button variant="text" component={Link} to="/deals">
                  Deals
                </Button>
                {email ? (
                  <Button variant="contained" color="secondary">
                    LogOut
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                )}
              </div>
            )}
            <img src={photoURL} style={photoStyle} alt="logo" />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
