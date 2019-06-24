import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {

    render() {

        const style = {
            width: this.props.width,
            height: this.props.height
        };

        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 33.7490,
                    lng: -84.3880
                }}
                zoom={10}>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API)
})(MapContainer);