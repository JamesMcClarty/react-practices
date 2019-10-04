import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationForm.css';
import {firstLetterCase} from '../../modules/Helpers';

class LocationForm extends Component {
    state = {
        locationName: "",
        phone: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal 
    object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "" || this.state.phone === "") {
            window.alert("Please input a location name and phone number.");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                locationName: this.state.locationName,
                phone: this.state.phone
            };

            // Create the animal and redirect user to animal list
            APIManager.post(location, "locations")
                .then(() => this.props.history.push("/locations"));
        }
    };

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div>
                        <p>Input Location:</p>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationName"
                                placeholder="location name"
                            />
                            <p>Input Phone Number:</p>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="phone"
                                placeholder="Phone number"
                            />
                            
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm