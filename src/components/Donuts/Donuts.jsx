import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'

const Donuts = ({post, addFavorite, isAuth}) => {
    const {title, imageURL,name,recipe, photoURL, id} = post;
  return (
    <>
     <div className="d-flex flex-row m-2 responsive-donut">
    <div className="image-box ">          <img src={imageURL} id="donut-img-3"/>     
</div>
<div className=" col-xl-7 col-sm-12 ">
          <h5 className=" py-2 mx-2">{title}</h5>
          <p className="m-2 mobile-donut">{recipe.slice(0,125)}...</p>

          <div className="d-flex mx-2">

          <img src={photoURL} className="tp my-1" />
    
  <div className="butons">
   
  
  </div>
          <p className="mx-2 my-auto opacity-75">by {name}</p>
          </div>
          <p className="more"><Link to={`/donuts/${id}/${title}`}>Read More</Link></p> 

       </div>
       <AiFillHeart style={{color: "red", cursor: "pointer", height: "50px", width: "30px"}} 
      onClick={ () => addFavorite(id)}
/>
         </div>
       </>
  )
}

export default Donuts

