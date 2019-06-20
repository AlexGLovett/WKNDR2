import React, { Component } from "react";
import { Button } from "react-materialize";
import SignUp from "../../components/Modals/SignUp";

//import API from "../utils/API";


class Login extends Component {


  render() {

    const signInWithGoogle = this.props.signInFunction;

    return (
      <div>
        <h1>Your Adventure Begins Here</h1>
        <SignUp />
        <Button onClick={signInWithGoogle}>Sign In</Button>
      </div>
    );
  }
}

export default Login;
