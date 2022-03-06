import React from "react";
import bg from "../../img/donuts.jpg";
import user from "../../img/user.png";
import Login from "../Authentication/Login";

const Home = () => {
  return (
    <>
      <div className="contailer-fluid cc">
        {" "}
        <img src={bg} id="bg" />
        <div className="navbar">
          <h2 className="ms-4">Tasty Donuts</h2>
        </div>
      </div>

      <Login />
    </>
  );
};

export default Home;
