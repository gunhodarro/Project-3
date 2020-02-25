import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Give from "./Give";
import OurMission from "./OurMission";
import Recieve from "./Receive";
import SignIn from "./SignIn";
const Home = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);
export default Home;
