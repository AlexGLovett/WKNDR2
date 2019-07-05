import React, { Component } from "react";
import "./styles.css";
import Slider from "../slider";
import { Range, Row, Col, Switch } from "react-materialize";

class Selector extends Component {
    state = {
        activities: ["Food", "Amusements", "Attractions", "Nightlife", "Outdoors", "Selfcare", "Shopping", "Culture"],
        max: 8
    };
    render() {
        return (
            <div id="selectors">
                <div>
                    <p># of Activities</p>
                    {this.state.activities.map(sel => <Slider title={sel} max={this.state.max} />)}
                </div>
                <p>Travel Settings</p>
                <Row>
                    <Col s={4}>Travel Distance</Col>
                    <Col s={8}><Range min={5} max={50} name="travel-distance" /></Col>
                </Row>
                <Row>
                    <Col><Switch offLabel="Tourist Mode" onLabel="Local Mode" /></Col>
                </Row>
            </div>
        );
    };
};
export default Selector;