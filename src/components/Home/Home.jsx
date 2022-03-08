import React, {useState, useEffect, useRef} from 'react'
import { useContext, MainContext } from "../../hook/Context";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../configs/firebase";
import { Carousel } from '@trendyol-js/react-carousel';
import {GiDonut} from 'react-icons/gi'
import Donuts from '../Donuts/Donuts';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import Slider from './Slider';
const Home = () => {
  const { isAuth, setIsAuth, postLists, setPostList } = useContext(MainContext);


  return (
    <>
    <div className="slider-contain">
      <Slider />
      
      </div>
<div className="container-fluid py-4">
    <div className="container py-4 pb-4 fe" style={{borderTop: "3px solid #52ccd1"}}>
      <h4 className="hot">What's <span style={{color: "#52CCD1"}}>Popular</span></h4>
      <div className="d-flex flex-row flex-wrap">
    {postLists.slice(0, 6).map((post) => (
    <>
    <div className="d-flex flex-column m-2 qw">
          <img src={post.imageURL} id="donut-img-2"/>     
          <h5 className=" py-2">{post.title}</h5>
          <div className="d-flex">
          <img src={post.photoURL} className="tp my-1" />
          <p className="mx-2 opacity-75">by {post?.name}</p>
          </div></div>
          </>
        ))}
           </div></div>
           
           <div className="container py-4 xd">
      <h4 className="hot m-2">New <span style={{color: "#52CCD1"}}>Donuts!</span></h4>
      <div className="d-flex flex-column flex-wrap row">
        <div className="col-8">
    {postLists.slice(0, 6).map((post) => (
    <>
 <Donuts post={post}/>
          </>
        ))}
        </div>

       
           </div>
      
           </div>
          
           </div>
    </>
  )
}

export default Home