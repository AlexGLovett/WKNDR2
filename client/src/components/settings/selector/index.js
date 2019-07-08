import React, { Component } from "react";
import "./styles.css";
import Slider from "../slider";
import { Range, Row, Col, Switch } from "react-materialize";

class Selector extends Component {
    render() {
        const activities = ["Food", "Amusements", "Attractions", "Nightlife", "Outdoors", "Selfcare", "Shopping", "Culture"];
        const max = 4;
        return (
            <div id="selectors">
                <div>
                    <p># of Activities</p>
                    {activities.map(sel => <Slider title={sel} max={max} />)}
                </div>
                <p>Travel Settings</p>
                <Row>
                    <Col s={6}>Travel Distance</Col>
                    <Col s={6}><Range min={5} max={50} name="travel-distance" /></Col>
                </Row>
                <Row>
                    <Col s={2}></Col>
                    <Col><Switch offLabel="Tourist Mode" onLabel="Local Mode" /></Col>
                </Row>
            </div>
        );
    };
};
export default Selector;