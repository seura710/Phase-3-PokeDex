import React  from "react"; 
import './App.css';
import {Route, Switch} from "react-router-dom"
// import Search from './Search'
import  Navigator  from './Navigator';
import AddNew from "./AddNew";
import Display from './Display';



function App() {
  return (
    <div className="App">
      <Navigator />
      {/* <Display /> */}
      <Switch>
        <Route exact path='/AddNew'>
          <AddNew />
        </Route>
        <Display />
      </Switch>
      {/* <Display /> */}
     <div className = "container">
      <div classname = "global">

      </div>
        
      {/* <div className = "Poke_field"/> */}
        {/* <Display /> */}
      {/* </div> */}
  
    </div>
    </div>
  );
}

export default App;

//make route for AddNew
