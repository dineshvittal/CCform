import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch,Redirect } from "react-router-dom";
import Card from "./../card";
import Result from "./../Result";
import App from "./../App";
import Header from "./header";
import Footer from "./footer";
import Ctest from "./../Ctest";


class Navbar extends React.Component{
  render(){
return(
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route path="/Card"  exact component={App} />
        <Route path="/Result" exact  component={Result} />
        <Route path="/Result:ID"   component={Result} />
        <Route path="/Ctest"  exact component={Ctest} />
        <Redirect to="/Card" /> 
              </Switch>
      <Footer />
    </div>
  </Router>)
  }
}



export default Navbar;