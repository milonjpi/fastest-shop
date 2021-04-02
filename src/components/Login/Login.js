import React, { useContext } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [ , setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const loginUser = {
          isLoggedIn: true,
          displayName: displayName,
          email: email
        };
        setLoggedInUser(loginUser);
        history.replace(from);
      })
      .catch((err) => {
          console.log(err)
      });
  };
  return (
    <div className="container">
      <div className="text-center mt-5">
        <button onClick={handleLogin} type="button" className="btn">
          <span className="btn btn-primary btn-custom"><FontAwesomeIcon icon={faGoogle} /></span><span className="btn px-5 btn-primary">Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
