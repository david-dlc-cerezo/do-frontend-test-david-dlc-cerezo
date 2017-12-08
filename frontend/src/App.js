import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from './containers/Login';
import Logout from './containers/Logout';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';
import loggedUser from './utils/loggedUser';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="Wrapper">
            {/* TODO: must add some security control here */}
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/users/sign_up" component={SignUp}/>
              <Route path="/" component={(routeProps) => <Dashboard {...routeProps} token={loggedUser.getToken()} />}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
