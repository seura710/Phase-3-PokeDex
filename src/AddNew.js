
import "./App.css";
import Form from "./Form";
// import Navigator from ‘./Navigator’;
import {Route, Switch, Link} from "react-router-dom"
import App from "./App.js"
function AddNew() {
  return (
  <div>
    <div >
      {/* <Navigator/> */}
       <Switch>
          <Route exact path="/App">
          <App />
          </Route>
          <div>
            <Link to="App">
              <div className= "buttonContainer">
                <button className = "phoneHome">
                  <div className = "innerCircle"/>
                  ""
                  <div className = "inCircle"/>
                </button>
              </div>
            </Link>
          </div>
       </Switch>
      <Form />
    </div>
  </div>
  );
}
export default AddNew;
//make Route back to App.js