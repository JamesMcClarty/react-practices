import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Owner: {this.props.owner.name}</h2>
                    <h3>Phone: {this.props.owner.phone}</h3>
                </div>
            </div>
        );
    }
}

export default OwnerCard;