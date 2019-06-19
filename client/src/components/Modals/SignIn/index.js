import React from "react";
import { Modal, Button } from "react-materialize";

function SignIn() {
    return (
        <Modal header="Sign In" trigger={<Button>Sign In</Button>}>
            <p>Your Journey Continues</p>
            <input type="text" name="username"></input>
            <input type="text" name="password"></input>
            <Button>Go!</Button>
        </Modal>
    );
}


export default SignIn;