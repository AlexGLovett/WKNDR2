import React from "react";
import { Modal, Button } from 'react-materialize';

function SignUp() {
    return (
        <Modal header="Sign Up" trigger={<Button>Sign Up</Button>}>
            <p>Your Adventure Begins!</p>
            <input type="text" name="inputEmail"></input>
            <input type="text" name="inputUserName"></input>
            <input type="text" name="inputPassword"></input>
            <input type="text" name="inputAge"></input>
            <input type="text" name="inputCountry"></input>
            <input type="text" name="inputZipcode"></input>
            <input type="text" name="inputPasswordVer"></input>
            <Button>Go!</Button>
        </Modal>
    );
}


export default SignUp;