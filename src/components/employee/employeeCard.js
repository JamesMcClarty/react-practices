import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/Helpers'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Name: <span className="card-employeeName">{this.props.employee.employeeName}</span></h2>
                    <button type="button"
            onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>FIRE</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;