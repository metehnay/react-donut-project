import React, {useState, useEffect, useRef} from 'react'
import { useContext, MainContext } from "../../hook/Context";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../configs/firebase";
import { Carousel } from '@trendyol-js/react-carousel';
import {GiDonut} from 'react-icons/gi'

const Home = () => {
  const { isAuth, setIsAuth, postLists, setPostList } = useContext(MainContext);


  return (
    <>
    
        <div className="container-fluid">
        <div className="donut-container d-flex ">

        {postLists.map((post) => (
          <div className="d-flex flex-column align-items-center mx-auto">

          <img src={post.imageURL} id="donut-img"/>     
          <h5 className=" mx-auto py-2">{post.title}</h5>
          <div className="d-flex justify-content-center">
          <img src={post.photoURL} className="tp align-items-center my-1" />
          <p className="mx-2 opacity-75">by {post?.name}</p>
          </div>
          </div>
        ))}

</div>

    </div>
    <div className="container">
      <h4 className="hot">What's <span style={{color: "#52CCD1"}}>Hot</span></h4>
      <div className="d-flex flex-row flex-wrap">
    {postLists.slice(0, 6).map((post) => (
    <>
    <div className="d-flex flex-column m-2">
          <img src={post.imageURL} id="donut-img-2"/>     
          <h5 className=" py-2">{post.title}</h5>
          <div className="d-flex">
          <img src={post.photoURL} className="tp my-1" />
          <p className="mx-2 opacity-75">by {post?.name}</p>
          </div></div>
          </>
        ))}
           </div></div>

      
    </>
  )
}

export default Home