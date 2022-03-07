import React from 'react'
import {FaCloudUploadAlt} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {AiFillTrophy} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {Link} from 'react-router-dom'
const ikon = {
    marginRight: "8px",
    marginBottom: "5px"
  }
const Header = () => {
  return (
    <>
    <div className="navbar d-flex justify-content-around bg-primary">
        <div className="nav-brand text-light h2 fm">Tasty Donuts</div>
        <ul className="ul d-flex h5 text-light">
        <li><AiFillHome style={ikon}/><Link to="/">Home</Link></li>

        <li> <FaCloudUploadAlt style={ikon} /><Link to="/addDonut">Add Donut</Link></li>
          <li><AiFillTrophy style={ikon}/>Popular</li>
          <li><AiFillHeart style={ikon}/>Liked</li>
          <li><Link to="/login" className="login">Login</Link></li>
        </ul></div>
    </>
  )
}

export default Header