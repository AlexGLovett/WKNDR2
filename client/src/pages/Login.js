import React, { Component } from "react";
import SignIn from "../components/Modals/SignIn";
import SignUp from "../components/Modals/SignUp";
//import API from "../utils/API";
//import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <div>
        <h1>Your Adventure Begins Here</h1>
        <SignUp />
        <SignIn />
      </div>
    );
  }
}

export default Login;
