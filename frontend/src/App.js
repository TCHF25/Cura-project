import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Feed from "./routes/Feed";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Medication from "./routes/Medication";
import Preloader from "./components/Preloader";
import NotFound from "./routes/Notfound";


function App() {
  const [curPath, setCurPath] = useState(true);
  //page pre loader
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(".Pagecontents").style.visibility = "hidden";
      document.querySelector(".ppreloader").style.display = "unset";
    } else {
      document.querySelector(".ppreloader").style.display = "none";
      document.querySelector(".Pagecontents").style.visibility = "visible";
      document.querySelector(".Pagecontents").style.display = "unset";
    }
  };
  //home remove navbar
  const loc = useLocation();
  useEffect(() => {
    const rendernav = () => {
      if (
        loc.pathname === "/home" ||
        loc.pathname === "/login" ||
        loc.pathname === "/register"
      ) {
        setCurPath(false);
      }
    };
    rendernav();
  }, [loc]);

  return (
    <div className="App">
      <div className="ppreloader">
        <Preloader />
      </div>
      <div className="Pagecontents">
        {curPath && <Navbar />}

        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/" element={<Navigate to="/feed" />}></Route>
            <Route path="/home" element={<Home />}></Route> 
            <Route path="/medication" element={<Medication />}></Route>    
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;