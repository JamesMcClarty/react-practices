import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from '../../modules/LocationManager';
import AnimalManager from '../../modules/AnimalManager';
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        animalId: "",
        locationId: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal 
    object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployees = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.animalId === "" ||this.state.locationId === "") {
            window.alert("Please input a name, loction they work, and animal in care.");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                employeeName: this.state.employeeName,
                animalId: this.state.animalId,
                locationId: this.state.locationId
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employees"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="employeeName"
                        placeholder="Employee name"
                        />
                        <label htmlFor="employeeName">Name</label>
                        <select 
                        required
                        onChange={this.handleFieldChange}
                        id="animalId">
                            {AnimalManager.getAll().then(animals =>{
                                animals.forEach()
                            })}
                        </select>
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default AnimalForm