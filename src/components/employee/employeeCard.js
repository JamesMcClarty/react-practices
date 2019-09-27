import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Employees:</h2>
                    <h3>Name: <span className="card-Employeename">John Doe</span></h3>
                    <p>Position: Cleaner</p>
                    <h3>Name: <span className="card-Employeename">Jake Maki</span></h3>
                    <p>Position: Caregiver</p>
                    <h3>Name: <span className="card-Employeename">Linda Jose</span></h3>
                    <p>Position: Veternarian</p>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;