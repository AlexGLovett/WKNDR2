import React, { Component } from "react";
import { Card, Col, Row, Icon } from "react-materialize";

class Console extends Component {

    render() {

        return (
            <Row>
                <Col offset="xl2" pull="xl1" m={6} s={12}>
                    <Card title="Card title" actions={[
                        <Icon key={"itinerary"}>cloud</Icon>,
                        <Icon key={"map"}>map</Icon>,
                        <Icon key={"calendar"}>cloud</Icon>,
                        <Icon key={"account"}>cloud</Icon>]}>
                        I am a very simple card.
                    </Card>
                </Col>
            </Row>
        );
    };

}

export default Console;