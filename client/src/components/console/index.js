import React, { Component } from "react";


import { CardPanel, Col, Row, Icon } from "react-materialize";
import "./style.css";

import MapContainer from "../map/Map/index";


class Console extends Component {


    render() {

        return (
            <div className="container">
                <Row>
                    <Col m={3} s={12} id="accountSettings">
                        Search and Account Settings Panel
                    </Col>
                    <Col m={6} s={12} id="mapContainer">
                        <MapContainer />
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