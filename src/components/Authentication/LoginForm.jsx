import React, { useEffect, useState, useCallback } from "react";
import user1 from "../../img/user.png";
import bg from "../../img/donuts.jpg";

import { useContext, MainContext } from "../../hook/Context";
import google from "./google-icon.svg";
import { auth, provider } from "../../configs/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const LoginForm = () => {

  const { isAuth, setIsAuth } = useContext(MainContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [error, setError] = useState("")
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  const signIn = useCallback(() => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);

      toast(`Successfully logged in! Loading...`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
        pauseOnHover: true,
        draggable: false,
      });
      setIsAuth(true);
      const grat = () => {
        navigate("/");
      };
      setTimeout(grat, 1500);
    });
  }, [isAuth, setIsAuth, navigate]);

  const logged = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
 
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      const grat = () => {
        navigate("/");
      };
      setTimeout(grat, 1500);

      toast(`Successfully logged in! Loading...`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
        pauseOnHover: true,
        draggable: false,
      });
    } catch (error) {
      console.log(error.message);
      setError("Email or password is wrong. Please try again...")
    }
  };
  return (
    <>
         <div className="contailer-fluid cc">
        {" "}
        <img src={bg} id="bg" />
      
      </div>

      <div className="container">
        <div className="form-control ww d-flex flex-column  p-4">
          <h3 className="py-2 text-light opacity-95">
            <img src={user1} id="ikon" />
            Sign in
          </h3>
          <button
            className="w-100 border bg-white rounded-75"
            type="button"
            onClick={signIn}
          >
            <div className="d-flex justify-content-center align-items-center px-4 p-1">
              <img src={google} id="google" />{" "}
              <span className="h5 m-2 opacity-75">Sign in with Google</span>
            </div>
          </button>
          <input type="text" className="my-3 py-3" placeholder="Email..."   onChange={(event) => {
                setLoginEmail(event.target.value);
              }}/>
          <input
            type="password"
            className="my-0 py-3 "
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button type="button" className="btn btn-primary py-3 my-2 text-light" onClick={logged}>
            <span className="h5 ">Sign in</span>
          </button>
          <div className="text-light bg-danger">{error}</div>
          <div className="d-flex justify-content-end">
            <h6 className="py-2 my-2 text-white ">
              Don't have an account?{" "}
              <span ><Link to="/signup" className="text-primary">Sign up now.</Link></span>
            </h6>
          </div>
          <h6>
            {" "}
            <h6 className="d-flex justify-content-end">
            <Link to="/" className="text-primary opacity-75">  Continue as Guest</Link>
            </h6>
          </h6>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
