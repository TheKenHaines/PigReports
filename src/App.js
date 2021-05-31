import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from "./components/create-user.component";
import Users from "./components/users.component";
import receiveform from './components/receiveform';
import launchform from './components/launchform';
import epicLogo from './pics/epicLogo.jpg';


function App() {
  return (<Router>
    <div className="App">
      <header>
        <img src= {epicLogo}/><br/>

    
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          
          <a className="navbar-brand">Epic PIG Reports</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-user"}>Create User</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/receiveForm"}>Received Pig Form</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={"/launchForm"}>Launched Pig Form</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={CreateUser} />
              <Route path="/create-user" component={CreateUser} />
              <Route path="/users" component={Users} />
              <Route path="/receiveForm" component={receiveform} />
              <Route path="/launchForm" component={launchform} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;