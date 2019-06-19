import React from "react";
import { Modal, Button } from 'react-materialize';

function SignUp() {
    return (
        <Modal header="Sign Up" trigger={<Button>Sign Up</Button>}>
            <p>Your Adventure Begins!</p>
        </Modal>
    );
}


export default SignUp;