import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from '../../modules/LocationManager';
import AnimalManager from '../../modules/AnimalManager';
import './EmployeeForm.css';
import {firstLetterCase} from '../../modules/Helpers';

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
        employeeName: "",
        animalId: "",
        locationId: "",
        loadingStatus: false,
        locationList: [],
        animalList: []
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            employeeName: this.state.employeeName,
            animalId: this.state.animalId,
            locationId: this.state.locationId
        };

        EmployeeManager.update(editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    employeeName: employee.employeeName,
                    animalId: employee.animalId,
                    locationId: employee.locationId,
                    loadingStatus: false,
                });
            });
        LocationManager.getAll()
            .then((data) => {
                console.log(data)
                this.setState({
                    locationList: data
                })
            })
        AnimalManager.getAll()
            .then((data) => {
                this.setState({
                    animalList: data
                })
            })
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div>
                            <p>Enter your name:</p>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                value={this.state.employeeName}
                            />
                            <p>Select Location:</p>
                            <select
                                required
                                onChange={this.handleFieldChange}
                                id="locationId"
                                value={this.locationId}>
                                {this.state.locationList.map((datafile) =>
                                    <option key={datafile.id} value={datafile.id}>{firstLetterCase(datafile.locationName)}</option>
                                )}
                            </select>
                            <p>Select Animal:</p>
                            <select
                                required
                                onChange={this.handleFieldChange}
                                id="animalId"
                                value={this.animalId}>
                                {this.state.animalList.map((datafile) =>
                                    <option key={datafile.id} value={datafile.id}>{firstLetterCase(datafile.name)}</option>
                                )}
                            </select>

                            <div className="alignRight">
                                <button
                                    type="button" disabled={this.state.loadingStatus}
                                    onClick={this.updateExistingEmployee}
                                    className="btn btn-primary"
                                >Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EmployeeEditForm