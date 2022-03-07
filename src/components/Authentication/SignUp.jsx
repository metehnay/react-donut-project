import React, { useRef, useState } from "react";
import user1 from "../../img/user.png";
import bg from "../../img/donuts.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useContext, MainContext } from "../../hook/Context";
import { ToastContainer, toast } from "react-toastify";

import { auth } from "../../configs/firebase";


const Signup = () => {
  const { isAuth, setIsAuth, loading, setLoading, success, setSuccess } = useContext(MainContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hata, setHata] = useState(true)
  let navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleAction =  (id) => {
const authentication = getAuth();

  createUserWithEmailAndPassword(authentication, email, password).then(geto => setLoading(false)).catch(errors => (setHata("Your password must be minimum 8 character including numbers."), setLoading(true)));
    
    if(!loading) {
    toast(`Successfully signed up! Loading...`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
      pauseOnHover: true,
      draggable: false,
        })
        navigate("/login");
              }
  }

  return (
    <>
       <div className="contailer-fluid cc">
        {" "}
        <img src={bg} id="bg" />
     
      </div>
      
      <div className="container ">
        <div className="form-control ww d-flex flex-column p-4">
          <h3 className="py-2 text-light opacity-95">
            <img src={user1} id="ikon" />
            Sign up 
          </h3>
          <input type="text" className="my-2 py-3" placeholder="Email..."  onChange={(event) => {setEmail(event.target.value)}}/>
          <input
            type="password"
            className="my-2 py-3 "
            placeholder="Password..."  onChange={(event) => {setPassword(event.target.value)}}
          />
          <button type="button" className="btn btn-primary py-3 my-2 text-light" onClick={handleAction}>
            <span className="h5 ">Sign up</span>
          </button>
          <div className="text-light bg-danger">{hata}</div>
          <div className="d-flex justify-content-end">
            <h6 className="py-2 my-2 text-white ">
              Already have an account?{" "}
              <span><Link to="/login" className="text-primary">Log in now.</Link></span>
            </h6>
          </div>
          <h6>
            {" "}
            <h6 className="d-flex justify-content-end text-primary opacity-75">
              <Link to="/" className="text-primary opacity-75">Continue as Guest</Link>
            </h6>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Signup;
