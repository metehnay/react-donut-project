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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const postsCollectionRef = collection(db, "posts");
  const MySwal = withReactContent(Swal);

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

  const removeFavourites = () => {
    const greet = () => {
      localStorage.removeItem("dam");

      window.location.reload();
    };
    MySwal.fire({
      title: "REMOVING LIKED DONUTS",
      icon: "warning",
      text: `Are you sure? you wan't to delete all your liked donuts.`,
      showCancelButton: true,
      confirmButtonText: "Delete",
      customClass: {
        confirmButton: "btn btn-primary m-2 p-2",
        cancelButton: "btn btn-success m-2 p-2",
      },
      showClass: {
        backdrop: "swal2-noanimation", // disable backdrop animation
        popup: "", // disable popup animation
        icon: "", // disable icon animation
      },
      hideClass: {
        backdrop: "swal2-noanimation", // disable backdrop animation
        popup: "", // disable popup animation
        icon: "", // disable icon animation
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        toast(`Liked Donut's deleting. Please wait...`, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
          pauseOnHover: true,
          draggable: false,
        });

        setTimeout(greet, 3000);
      } else {
        alert("cool");
      }
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
    removeFavourites,
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
