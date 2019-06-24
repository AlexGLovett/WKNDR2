import React, { Component } from "react";
import ReactDOM from "react-dom";


import { CardPanel, Col, Row, Icon } from "react-materialize";
import "./style.css";

import MapContainer from "../map/MapContainer/index";


class Console extends Component {

    constructor(props) {
        super(props);
        this.state = {
            node: ""
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        const node = ReactDOM.findDOMNode(this.divElement);
        this.setState({ node });
    };

    updateDimensions() {
        const node = ReactDOM.findDOMNode(this.divElement);
        this.setState({ node });
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    };

    render() {

        return (
            <div className="container">
                <Row>
                    <Col m={3} s={12} id="accountSettings">
                        Search and Account Settings Panel
                    </Col>
                    <Col m={6} s={12} id="mapContainer" ref={(divElement) => this.divElement = divElement}>
                        <MapContainer height={this.state.node.clientHeight} width={this.state.node.clientWidth} />
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