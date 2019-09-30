import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p>Location: {this.props.location.locationName}</p>
                    <p>Phone Number: {this.props.location.phone}</p>
                </div>
            </div>
        );
    }
}

export default LocationCard;