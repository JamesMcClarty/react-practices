import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeManager from '../../modules/EmployeeManager'
import EmployeeCard from '../employee/x'

class LocationsWithEmployees extends Component {
    state = {
        location: {},
        employees: [],
    }

    deleteEmployee = id => {
        EmployeeManager.delete(id)
            .then(() => {
              this.componentDidMount()
            })
    }

    componentDidMount() {
        LocationManager.getWithEmployees(this.props.match.params.locationId)
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