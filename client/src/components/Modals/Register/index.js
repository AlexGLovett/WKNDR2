import React, { Component } from "react";
import { Modal, Button, TextInput, Row, Col, Checkbox } from 'react-materialize';
import API from '../../../utils/API';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            zipcode: '',
            user: {
                display_name: props.user.displayName,
                email: props.user.email,
                uid: props.user.uid,
                zipcode: 0,
                distance: 25,
                interests: {
                    outdoors: false,
                    attractions: false,
                    culture: false,
                    food: false,
                    nightlife: false,
                    amusements: false,
                    shopping: false,
                    selfcare: false
                }
            },
            checkedStates: {
                outdoors: false,
                attractions: false,
                culture: false,
                food: false,
                nightlife: false,
                amusements: false,
                shopping: false,
                selfcare: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    };

    handleChange(event) {
        event.preventDefault();
        let updatedUser = {};
        Object.assign(updatedUser, this.state.user);
        updatedUser.zipcode = event.target.value;
        const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        const result = regex.test(updatedUser.zipcode);
        this.setState({ user: updatedUser, valid: result, zipcode: event.target.value });
    };

    handleCheck(event) {
        const interest = event.target.value.toString().toLowerCase();
        let updatedUser = {};
        let updatedChecks = {};
        Object.assign(updatedUser, this.state.user);
        Object.assign(updatedChecks, this.state.checkedStates);
        updatedUser.interests[interest] = event.target.checked;
        updatedChecks.interest = event.target.checked;
        this.setState({ user: updatedUser, checkedStates: updatedChecks });
    };

    handleSubmit(event) {
        event.preventDefault();
        API.createUser(this.state.user);
    };

    render() {
        return (
            <Modal open={true} header="Let's Get Started!" fixedFooter options={{ dismissible: false }} actions={<Button disabled={this.state.valid ? false : true} modal="close" onClick={this.handleSubmit}>Go!</Button>}>
                <Row s={10}>
                    <Col s={6}>
                        <TextInput name="inputZipcode" label="Zipcode" onChange={this.handleChange} value={this.state.zipcode} />
                    </Col>
                </Row>
                <Row s={10}>
                    <Row s={12}>
                        <Col s={3}>
                            <Checkbox value="Outdoors" label="Outdoors" onChange={this.handleCheck} checked={this.state.checkedStates.outdoors} />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Attractions" label="Attractions" onChange={this.handleCheck} checked={this.state.checkedStates.attractions} />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Culture" label="Culture" onChange={this.handleCheck} checked={this.state.checkedStates.culture} />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Food" label="Food" onChange={this.handleCheck} checked={this.state.checkedStates.food} />
                        </Col>
                    </Row>
                    <Row s={12}>
                        <Col s={3}>
                            <Checkbox value="NightLife" label="NightLife" onChange={this.handleCheck} checked={this.state.checkedStates.nightlife} />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Amusements" label="Amusements" onChange={this.handleCheck} checked={this.state.checkedStates.amusements} />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="Shopping" label="Shopping" onChange={this.handleCheck} checked={this.state.checkedStates.shopping} />
                        </Col>
                        <Col s={3}>
                            <Checkbox value="SelfCare" label="SelfCare" onChange={this.handleCheck} checked={this.state.checkedStates.selfcare} />
                        </Col>
                    </Row>
                </Row>


            </Modal>
        );
    }
}


export default Register;