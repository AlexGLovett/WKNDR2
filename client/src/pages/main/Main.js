import React, { Component } from "react";
import { Button } from "react-materialize";

//import API from "../utils/API";


class Main extends Component {


    render() {

        const { user, signOutFunction } = this.props;

        return (
            <div>
                <h1>Your Journey Is Just a Few Steps Away...</h1>
                <p>Hello {user.displayName}</p>
                <Button onClick={signOutFunction}>Sign Out</Button>
            </div>
        );
    }
}

export default Main;