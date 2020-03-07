import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Me from "Routes/Me";
import Header from "./Partial/Header/Header";
import Footer from "./Partial/Footer/Footer";
import SideBar from "./Partial/SideBar/SideBar";
export default () => {
  return (
    <Router>
      <>
        <Header />
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/me" exact component={Me} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};
