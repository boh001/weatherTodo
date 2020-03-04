import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import SideBar from "./partials/SideBar";
export default () => {
  return (
    <Router>
      <>
        <Header />
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};
