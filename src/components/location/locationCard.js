import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p>
                        500 Puppy Way
                     </p>
                     <p>
                        700 Kitty Way
                     </p>
                </div>
            </div>
        );
    }
}

export default LocationCard;