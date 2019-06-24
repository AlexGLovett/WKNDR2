import React, { Component } from "react";
import ReactDOM from "react-dom";


import { CardPanel, Col, Row, Icon } from "react-materialize";
import "./style.css";

import MapContainer from "../map/MapContainer/index";


class Console extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: null,
            width: null
        };
    };

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this.divElement);
        const height = node.clientHeight;
        const width = node.clientWidth;
        console.log(height);
        console.log(width);
        this.setState({ height, width });
    };

    componentDidUpdate() {
        var node = ReactDOM.findDOMNode(this.divElement);
        const height = node.clientHeight;
        const width = node.clientWidth;
        console.log(height);
        console.log(width);
        //this.setState({ height, width });
    };

    render() {



        return (
            <div className="container">
                <Row>
                    <Col m={3} s={12} id="accountSettings">
                        Search and Account Settings Panel
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