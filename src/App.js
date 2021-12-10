import React from "react";
import Display from "./Display";
import Navigator from "./Navigator";
import Search from "./Search";
import "./App.css";
import AddNew from "./AddNew";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="global">
          <div className="Navigator">
        <div className = " navContain">
        <div className = "buttonContainer">
         </div>
       <Search  className = "Search"/>
         </div>
        <Link to="/AddNew">
        <button className= "ADDPOKE" aria-label = "+ ADD POKEMON">+ ADD NEW POKEMON</button>
        </Link>
      <Switch>
        <Route exact path="/AddNew" component={AddNew} />
      </Switch>
          <Display/>
    </div>
          </div>
          {/* <div className="Poke_field" /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

//make route for AddNew
