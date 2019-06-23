import React, { Component } from "react";
import Register from "../../components/modals/Register";
import Console from "../../components/console"
import API from "../../utils/API";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { uid: props.user.uid, user: {}, registered: false };
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.findUser(this.state.uid)
            .then(res => {
                res.data == null ?
                    console.log("No User Found! Please Sign Up.")
                    :
                    this.setState({ user: res.data, registered: true })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h5>Hello {this.props.user.displayName}</h5>
                {
                    this.state.registered ?
                        <Console />
                        :
                        <Register user={this.props.user} />
                }
            </div>
        );
    }
}

export default Main;