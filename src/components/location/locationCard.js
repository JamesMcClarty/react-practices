import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p>Location: {this.props.location.locationName}</p>
                    <p>Phone Number: {this.props.location.phone}</p>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;