import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p>Location: {this.props.location.locationName}</p>
                    <p>Phone Number: {this.props.location.phone}</p>
                    <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;