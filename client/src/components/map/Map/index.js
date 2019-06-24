import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const style = {
            width: "40%",
            height: "40%"
        };

        return (
            <div class="container">
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: 33.7490,
                        lng: -84.3880
                    }}
                    zoom={14}>
                </Map>
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API)
})(MapContainer);