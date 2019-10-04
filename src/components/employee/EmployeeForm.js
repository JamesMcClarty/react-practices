import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from '../../modules/LocationManager';
import AnimalManager from '../../modules/AnimalManager';
import './EmployeeForm.css';
import {firstLetterCase} from '../../modules/Helpers';

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        animalId: "",
        locationId: "",
        loadingStatus: false,
        locationList: [],
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        console.log("Location in Employee form: ComponentDidMount");
        LocationManager.getAll()
            .then((data) => {
                console.log(data)
                this.setState({
                    locationList: data
                })
            })
    }

    /*  Local method for validation, set loadingStatus, create animal 
    object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployees = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.locationId === "") {
            window.alert("Please input a name and location for hire.");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                employeeName: this.state.employeeName,
                locationId: parseInt(this.state.locationId)
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
                .then(() => this.props.history.push("/employees"));
        }
    };

    render() {


        console.log(this.state.animalList)
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
                                placeholder="Employee name"
                            />
                            <p>Select Location:</p>
                            <select
                                required
                                onChange={this.handleFieldChange}
                                id="locationId">
                                {this.state.locationList.map((datafile) =>
                                    <option key={datafile.id} value={datafile.id}>{firstLetterCase(datafile.locationName)}</option>
                                )}
                            </select>
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployees}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm