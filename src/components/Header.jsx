import React from 'react'
import {FaCloudUploadAlt} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {AiFillTrophy} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {Link} from 'react-router-dom'
import donut from "../img/donut-icon.png"
import { signOut } from "firebase/auth";

import { useContext, MainContext } from "../hook/Context";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth, useAuth } from "../configs/firebase";

const ikon = {
    marginRight: "8px",
    marginBottom: "5px"
  }

const Header = () => {
  const currentUser = useAuth();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  const { isAuth, setIsAuth, postLists} = useContext(MainContext);

  return (
    <>
    <div className="navbar d-flex justify-content-around bgx">
        <div className="nav-brand text-light h2 fm d-flex">
          <img src={donut} style={{height: "45px"}}/> 
          <Link to="/">
 <h2 style={{ marginLeft: "10px"}}>Tasty Donuts</h2></Link>
          </div>
        <ul className="ul d-flex h5 text-light">
        <li><AiFillHome style={ikon}/><Link to="/">Home</Link></li>

        <li> <FaCloudUploadAlt style={ikon} /><Link to="/addDonut">Add Donut</Link></li>
          <li><AiFillTrophy style={ikon}/>Popular</li>
          <li><AiFillHeart style={ikon}/><Link to="/liked">Liked</Link></li>
          {isAuth ? <>
            <li onClick={signUserOut} id="logged-user" style={{cursor: "pointer"}}>
              Log out
            </li>
         {isAuth && <img src={currentUser?.photoURL ? currentUser.photoURL : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} className="tp"  />} </> :  <li><Link to="/login" className="login">Login</Link></li>
}
        </ul></div>
    </>
  )
}

export default Header