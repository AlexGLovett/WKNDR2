import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        height: this.props.height,
        width: this.props.width
    };

    render() {

        const style = {
            width: this.state.width,
            height: this.state.height
        };

        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 33.7490,
                    lng: -84.3880
                }}
                zoom={14}>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API)
})(MapContainer);