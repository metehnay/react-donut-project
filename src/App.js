import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./sass/app.scss";
import { commonRoutes } from "./configs/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "./configs/firebase";
import { MainContext } from "./hook/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import MobileNavigation from "./components/Mobile/MobileNavigation";

function App() {
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [postLists, setPostList] = useState([]);
  const [favorites, setFavorites] = useState(localStorage.getItem("dam"));

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("dam")) ?? [];
    setFavorites(localData);
  }, [setFavorites]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);

    localStorage.setItem("dam", JSON.stringify([...favorites, favorite]));

    toast(`Donut added to your Liked list!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
      pauseOnHover: true,
      draggable: false,
    });
  };

  const data = {
    isAuth,
    setIsAuth,
    loading,
    postLists,
    setPostList,
    favorites,
    setFavorites,
    addFavorite,
    setLoading,
    success,
    setSuccess,
  };
  return (
    <>
      {" "}
      <MainContext.Provider value={data}>
        <ToastContainer />

        <Router>
          <Header />
          <MobileNavigation />
          <Routes>
            {commonRoutes.map((RouteItem, index) => (
              <Route
                exact
                key={index}
                path={RouteItem.path}
                element={RouteItem.element}
              />
            ))}
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
