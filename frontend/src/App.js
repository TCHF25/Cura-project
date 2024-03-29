import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Feed from "./routes/Feed";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Medication from "./routes/Medication";
import Brief from "./routes/Brief";
import Profile from "./routes/Profile";
import Donate from "./routes/Donate";
import Contact from "./routes/Contact";
import Preloader from "./components/Preloader";
import NotFound from "./routes/Notfound";


function App() {
  const [curPath, setCurPath] = useState(true);
  //page pre loader
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(".Pagecontents").style.visibility = "hidden";
      document.querySelector(".preloader").style.display = "unset";
    } else {
      document.querySelector(".preloader").style.display = "none";
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
      <div className="preloader">
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
            <Route path="/brief" element={<Brief />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/donation" element={<Donate />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>        
          </Routes>
        </div>
       <Footer />
      </div>
    </div>
  );
}

export default App;