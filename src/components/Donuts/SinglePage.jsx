import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import { useContext, MainContext } from "../../hook/Context";
import {
FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton
} from "react-share";
import SocialShare from './SocialShare';


const SinglePage = () => {
    const { isAuth, setIsAuth, postLists, setPostList } = useContext(MainContext);

    const {title, id} = useParams();
  return (
    <>
    <div className="container-fluid">
        <div className="container py-4">
        <div className="row py-2">
            <div className="col-9 oop ">
                {postLists.filter(card => card.id === id).map((card,index) => (
                 <>
                                  <h2 className="p-2 m-2">{card.title}</h2>
                                  <div className="d-flex flex-row py-2 my-2">
                 <img src={card.photoURL} className="tp my-1" />
<p className="mx-2 opacity-75 my-auto">Posted by {card.name}</p>
</div>
 <SocialShare imageURL={card.imageURL} /> 
 <div className="img-card py-2">
                 <img src={card.imageURL} className="single-image"/>
                 </div>
              <p className="p-2 m-2 single-post">
                {card.recipe}
              </p>
                 </>   
                ))}</div></div></div></div>
    </>
  )
}

export default SinglePage