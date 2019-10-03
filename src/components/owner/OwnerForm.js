import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import AnimalManager from '../../modules/AnimalManager';
import './OwnerForm.css';
import {firstLetterCase} from '../../modules/Helpers';

class OwnerForm extends Component {
    state = {
        name: "",
        phone: "",
        animalId: "",
        animals: []

    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        AnimalManager.getAll()
            .then((data) => {
                this.setState({
                    animals: data
                })
            })
    }

    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phone === "") {
            window.alert("Please input an owner name and phone number.");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phone: this.state.phone,
                animalId: this.state.animalId
            };
            OwnerManager.post(owner)
                .then(() => this.props.history.push("/owners"));
        }
    };

    render() {

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
                            <p>Select Animal:</p>
                            <select
                                required
                                onChange={this.handleFieldChange}
                                id="animalId">
                                {this.state.animals.map((datafile) =>
                                    <option key={datafile.id} value={datafile.id}>{firstLetterCase(datafile.name)}</option>
                                )}
                            </select>
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