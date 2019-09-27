import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Owner: Mr. Guy</h2>
                    <h3>Address: 99 Fake Lane</h3>
                </div>
            </div>
        );
    }
}

export default OwnerCard;