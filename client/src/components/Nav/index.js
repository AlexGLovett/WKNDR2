import React, { Component } from "react";
import { Button, Navbar } from "react-materialize";

class Nav extends Component {
  render() {

    const { user, signOutFunction, signInFunction } = this.props

    return (
      <Navbar brand={<a href="/">WKNDR</a>} alignLinks="right">
        {
          user ?
            <Button className="right-align" onClick={signOutFunction}>Sign Out</Button>
            :
            <Button className="right-align" onClick={signInFunction}>Sign In</Button>
        }
      </Navbar>
    );
  }

}

export default Nav;
