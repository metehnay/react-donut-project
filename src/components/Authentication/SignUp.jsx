import React from "react";
import user from "../../img/user.png";
import bg from "../../img/donuts.jpg";

const Signup = () => {
  return (
    <>
       <div className="contailer-fluid cc">
        {" "}
        <img src={bg} id="bg" />
        <div className="navbar">
          <h2 className="ms-4">Tasty Donuts</h2>
        </div>
      </div>
      
      <div className="container ">
        <div className="form-control ww d-flex flex-column m-4 p-4">
          <h3 className="py-2 text-light opacity-95">
            <img src={user} id="ikon" />
            Sign up
          </h3>
          <input type="text" className="my-3 py-3" placeholder="Email..." />
          <input
            type="password"
            className="my-2 py-3 "
            placeholder="Password..."
          />
          <button type="button" className="btn btn-primary py-3">
            <span className="h5 ">Sign up</span>
          </button>
          <div className="d-flex justify-content-end">
            <h6 className="py-2 my-2 text-white ">
              Already have an account?{" "}
              <span className="text-primary">Log in now.</span>
            </h6>
          </div>
          <h6>
            {" "}
            <h6 className="d-flex justify-content-end text-primary opacity-75">
              Continue as Guest
            </h6>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Signup;
