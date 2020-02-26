import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OurMission from "./pages/OurMission";
import SignIn from "./pages/SignIn";
import Give from "./pages/Give";
import Receive from "./pages/Receive";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/give" component={Give} />
        <Route path="/signin" component={SignIn} />
        <Route path="/mission" component={OurMission} />
        <Route path="/receive" component={Receive} />
      </div>
    </Router>
  );
}

export default App;
