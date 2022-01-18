import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useContext } from "react";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "./../../App";

firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("google");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user);
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email);
      });
  };
  const btnStyle = {
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "25px",
    padding: "10px 40px",
  };
  const loginStyle = {
    height: "82vh",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={loginStyle}>
      <div>
        <h1 style={{ color: "white" }}>Do you want to login?</h1>
        <Button
          onClick={handleGoogleSignIn}
          variant="contained"
          color="primary"
          style={btnStyle}
        >
          <GoogleIcon />
          Google SignIn
        </Button>
        email: {loggedInUser.email}
      </div>
    </div>
  );
};

export default Login;
