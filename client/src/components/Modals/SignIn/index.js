import React from "react";
import { Modal, Button } from 'react-materialize';

function SignIn() {
    return (
        <Modal header="Sign In" trigger={<Button>Sign In</Button>}>
            <p>Your Journey Continues</p>
        </Modal>
    );
}


export default SignIn;