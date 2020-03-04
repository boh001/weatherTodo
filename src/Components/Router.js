import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
export default () => {
  return (
    <Router>
      <>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};
