import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p>Location: {this.props.object.locationName}</p>
                    <p>Phone Number: {this.props.object.phone}</p>
                    <Link to={`/locations/${this.props.object.id}`}><button>Details</button></Link>
                    <button type="button" onClick={() => this.props.deleteLocation(this.props.object.id)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default LocationCard;