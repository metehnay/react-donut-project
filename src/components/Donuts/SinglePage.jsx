import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext, MainContext } from "../../hook/Context";

const SinglePage = () => {
    const { isAuth, setIsAuth, postLists, setPostList } = useContext(MainContext);

    const {title} = useParams();
  return (
    <>
    <div className="container-fluid">
        <div className="container py-4">
        <div className="row py-4">
            <div className="col-12">
                {postLists.filter(card => card.title === title).map((card,index) => (
                 <>
                                  <h2 className="p-2 m-2">{card.title}</h2>

                 <img src={card.imageURL} id="single-image" />
                 <div className="d-flex flex-row py-2 my-2">
                 <img src={card.photoURL} className="tp my-1" />
<p className="mx-2 opacity-75">by {card.name}</p>
</div>
                 </>   
                ))}</div></div></div></div>
    </>
  )
}

export default SinglePage