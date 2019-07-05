import React, { Component } from "react";
import { Row, Col, Range } from "react-materialize";

import "./styles.css";

class Slider extends Component {
    render() {
        return (
            <Row class="sliderRow">
                <Col s={4} className="sliderTitle">{this.props.title}</Col>
                <Col s={8}><Range min="0" max={this.props.max} name={this.props.title} /></Col>
            </Row>
        );
    }
}

export default Slider;