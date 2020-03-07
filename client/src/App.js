import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import OurMission from "./pages/OurMission"
// import SignIn from "./pages/SignIn"
// import Give from "./pages/Give"
// import Receive from "./pages/Receive"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Location from "./components/Location"
// import Wrapper from "./components/Wrapper"
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Location />
     <Header />
      <p className="App-intro">
       
        <img src= "https://www.gpbnews.org/sites/wjsp/files/styles/medium/public/201712/homelessness_food.jpg"></img>
      </p>
      <Footer />
    </div>
  );
}


export default App;
