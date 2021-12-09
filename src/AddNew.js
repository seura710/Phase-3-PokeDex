import Toggle from './Toggle';
import './App.css';
import Form from './Form';
import Navigator from './Navigator';
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom"
import App from './App.js'


function AddNew() {
  return (
  <Router> 
    <div >
      {/* <Navigator/> */}
        <Form />
        <button className = "toggle" />
    </div>
    <div>
         <Link to="/App">
            <button type="button">Home
            </button>
         </Link>
      </div>
    <Switch>
      <Route exact path="/App" component={App}/>
    </Switch>
  </Router>
  );
}

export default AddNew;

//make Route back to App.js