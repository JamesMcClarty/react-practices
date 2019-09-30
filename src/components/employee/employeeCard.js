import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Name: <span className="card-employeeName">{this.props.employee.employeeName}</span></h2>
                    <p>Animal in Care: {this.props.employee.animal.name}</p>
                    <p>Location: {this.props.employee.location.locationName}</p>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>FIRE</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;