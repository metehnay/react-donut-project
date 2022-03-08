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
            <div className="col-8 oop p-2">
                {postLists.filter(card => card.id === id).map((card,index) => (
                 <>
                                  <h2 className="p-2 m-2">{card.title}</h2>
                                  <div className="d-flex flex-row py-2 my-2">
                 <img src={card.photoURL} className="tp my-1" />
<p className="mx-2 opacity-75">Posted by {card.name}</p>
</div>
 <SocialShare imageURL={card.imageURL} /> 

                 <img src={card.imageURL} id="single-image" className="p-2 mx-auto"/>
              <p className="p-2 m-2">
                {card.recipe}
              </p>
                 </>   
                ))}</div></div></div></div>
    </>
  )
}

export default SinglePage