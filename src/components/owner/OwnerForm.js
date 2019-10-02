import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css';
import {firstLetterCase} from '../../modules/Helpers';

class OwnerForm extends Component {
    state = {
        name: "",
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
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phone === "") {
            window.alert("Please input an owner name and phone number.");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phone: this.state.phone
            };

            // Create the animal and redirect user to animal list
            OwnerManager.post(owner)
                .then(() => this.props.history.push("/owners"));
        }
    };

    render() {


        console.log(this.state.animalList)
        return (
            <>
                <form>
                    <fieldset>
                        <div>
                        <p>Assign Owner:</p>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Owner name"
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
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm