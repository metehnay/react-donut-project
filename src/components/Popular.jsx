import React from 'react'
import { useContext, MainContext } from "../hook/Context";
import Donuts from "./Donuts/Donuts";

const Popular = () => {
    const { postLists, setPostList, favorites, setFavorites, removeFavourites } =
    useContext(MainContext);
  return (
    <>
 <div className="containers">
      
        <div className="sidebar">
          {" "}
          <div className="norris mt-4">
            <div className="favorite-container">
              <div className="new-container">
                {postLists.map((post) => (
                    <Donuts
                      post={post}
                      key={post.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popular