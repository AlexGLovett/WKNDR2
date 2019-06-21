import React, { Component } from "react";
import { Button } from "react-materialize";

class Nav extends Component {
  render() {

    const { user, signOutFunction, signInFunction } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          WKNDR
        </a>
        {
          user ?
            <Button onClick={signOutFunction}>Sign Out</Button>
            :
            <Button onClick={signInFunction}>Sign In</Button>
        }
      </nav>
    );
  }

}

export default Nav;
