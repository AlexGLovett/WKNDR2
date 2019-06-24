import React, { Component } from "react";

import { CardPanel, Col, Row, Icon } from "react-materialize";
import "./style.css";

import Map from "../map/Map/index";


class Console extends Component {


    render() {

        return (
            <Row>
                <Col s={10} push="s1">
                    <CardPanel className="console">
                        <Row className="console-content">
                            <Col l={3} m={2} s={12} id="accountSettings">
                                Search and Account Settings Panel
                            </Col>
                            <Col l={6} m={8} s={12}>
                                <Map />
                            </Col>
                            <Col l={3} m={2} s={12} id="itinerarySettings">
                                Itinerary and Results Panel
                            </Col>
                        </Row>
                    </CardPanel>
                </Col>
            </Row>
        );
    };

}

export default Console;