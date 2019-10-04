import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationsWithEmployees extends Component {
    state = {
        location: {},
        employees: [],
    }

    deleteEmployee = id => {
        APIManager.delete(id, "employees")
            .then(() => {
              this.componentDidMount()
            })
    }

    componentDidMount() {
        APIManager.getObjectWithDatabase(this.props.match.params.locationId, "locations", "employees")
            .then((APIResult) => {
                this.setState({
                    location: APIResult,
                    employees: APIResult.employees,
                })
            })
    }

    render() {

        if (this.state.employees.length !== 0) {
            return (
                <div className="card">
                    <p>Location: {this.state.location.locationName}</p>

                    {this.state.employees.map(employee =>
                        <EmployeeCard
                            key={employee.id}
                            employee={employee}
                            location={this.state.location}
                            deleteEmployee = {this.deleteEmployee}
                            {...this.props}
                        />
                    )}
                </div>
            )
        }

        else {
            return (
                <div className="card">
                    <p>{this.state.location.locationName} doesn't have any employees...</p>
                </div>
            )
        }
    }
}

export default LocationsWithEmployees