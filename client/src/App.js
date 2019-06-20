import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './auth/firebaseConfig';

import Nav from "./components/Nav";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";

import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends Component {
  render() {

    const {
      user,
      signInWithGoogle,
      signOut
    } = this.props;

    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            {
              user ?
                <Route path="/" render={(props) => <Main {...props} user={user} />} />
                :
                <Route path="/" render={(props) => <Login {...props} signInFunction={signInWithGoogle} />} />
            }
            {
              user ?
                <Route path="/main" render={(props) => <Main {...props} user={user} />} />
                :
                <Route path="/main" render={(props) => <Login {...props} signInFunction={signInWithGoogle} />} />
            }
          </Switch>
        </Router>

      </div>
    );
  };
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
