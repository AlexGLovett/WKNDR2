import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {

    state = {
        center: {
            lat: 33.7490,
            lng: -84.3880
        },
        clicked: false,
        marker: {}
    };
    constructor(props) {
        super(props);
        this.mapClickedEvent = this.mapClickedEvent.bind(this);
    };
    mapClickedEvent(lat, lng, clickEvent) {
        this.setState({ clicked: true, marker: clickEvent.latLng });
    };
    render() {

        const style = {
            width: this.props.width,
            height: this.props.height
        };

        const contStyle = {
            width: this.props.width,
            height: this.props.height,
            position: "relative"
        };

        return (
            <Map
                google={this.props.google}
                containerStyle={contStyle}
                style={style}
                onClick={this.mapClickedEvent}
                initialCenter={{
                    lat: 33.7490,
                    lng: -84.3880
                }}
                center={{}}
                zoom={10}>
                <Marker position={this.state.clicked ? this.state.marker : { lat: 33.7490, lng: -84.3880 }}></Marker>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API)
})(MapContainer);