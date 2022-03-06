import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./sass/app.scss";
import { commonRoutes } from "./configs/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  return (
    <>
      {" "}
      <Router>
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
    </>
  );
}

export default App;
