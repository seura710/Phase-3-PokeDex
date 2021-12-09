import React  from "react"; 
import Display from './Display';
import  Navigator  from './Navigator';
import './App.css';
import AddNew from "./AddNew";
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom"



function App() {
  return (
    <Router>
    <div className="App">

     <div className = "container">
       <div classname = "global">
        <Navigator />
        </div>
        <div className = "Poke_field"/>
        {/* <Display /> */}
     </div>
     {/* <AddNew/> */}
         <Link to="/AddNew">
         <button type="button">AddNew
           </button>
         </Link>
    
    </div>
      <Switch>
        <Route exact path="/AddNew" component={AddNew}/>
      </Switch>
    </Router>
  );
}

export default App;

//make route for AddNew 
