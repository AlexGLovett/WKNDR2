import React, { Component } from "react";
import { Modal, Button, TextInput, Row, Col, Checkbox } from 'react-materialize';
import API from '../../../utils/API';

class SignUp extends Component {

    render() {
        return (
            <Modal header="Sign Up" fixedFooter trigger={<Button>Sign Up</Button>} actions={<Button modal="close">Go!</Button>}>
                <Row s={10}>
                    <Col s={6}>
                        <TextInput type="number" name="inputAge" label="Age" />
                    </Col>
                    <Col s={6}>
                        <TextInput type="number" name="inputZipcode" label="Zipcode" />
                    </Col>
                </Row>
                <Row s={10}>
                    <Row s={12}>
                        <Col s={3}>
                            <Checkbox value="Outdoors" label="Outdoors" indeterminate />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Attractions" label="Attractions" indeterminate />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Culture" label="Culture" indeterminate />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Food" label="Food" indeterminate />
                        </Col>
                    </Row>
                    <Row s={12}>
                        <Col s={3}>
                            <Checkbox value="NightLife" label="NightLife" indeterminate />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Amusements" label="Amusements" indeterminate />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Shopping" label="Shopping" indeterminate />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="SelfCare" label="SelfCare" indeterminate />
                        </Col>
                    </Row>
                </Row>


            </Modal>
        );
    }
}


export default SignUp;