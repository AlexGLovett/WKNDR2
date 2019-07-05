import React, { Component } from "react";
import ReactDOM from "react-dom";


import { CardPanel, Col, Row, Icon } from "react-materialize";
import "./style.css";

import MapContainer from "../map/MapContainer/index";
import Selector from "../settings/selector";


class Console extends Component {
    state = {
        height: null,
        width: null,
    };

    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        const node = ReactDOM.findDOMNode(this.divElement);
        this.setState({ height: node.clientHeight, width: node.clientWidth });
    };

    updateDimensions() {
        const node = ReactDOM.findDOMNode(this.divElement);
        this.setState({ height: node.clientHeight, width: node.clientWidth });
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    };

    render() {

        return (
            <div className="container">
                <Row>
                    <Col m={3} s={12} id="accountSettings">
                        <Selector />
                    </Col>
                    <Col m={6} s={12} id="mapContainer" ref={(divElement) => this.divElement = divElement}>
                        <MapContainer height={this.state.height} width={this.state.width} />
                    </Col>
                    <Col m={3} s={12} id="itinerarySettings">
                        Itinerary and Results Panel
                    </Col>
                </Row>
            </div>
        );
    };

}

export default Console;