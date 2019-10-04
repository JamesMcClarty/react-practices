import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./OwnerForm.css"
import {firstLetterCase} from "../../modules/Helpers"

class LocationEditForm extends Component {
    //set the initial state
    state = {
        name: "",
        phone: "",
        animalId: "",
        animals: []

    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.name,
            phone: this.state.phone,
            animalId: this.state.animalId
        };

        APIManager.update(editedOwner, "owners")
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        APIManager.getAll("animals")
            .then((data) => {
                this.setState({
                    animals: data
                })
            })
            
        APIManager.get(this.props.match.params.ownerId, "owners")
            .then(owner => {
                this.setState({
                    name: owner.name,
                    phone: owner.phone,
                    animalId: parseInt(this.state.animalId),
                    loadingStatus: false,
                });
            });
        
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="ownerName"
                                value={this.state.name}
                            />
                            <label htmlFor="ownerName">Owner Name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="phone"
                                value={this.state.phone}
                            />
                            <label htmlFor="phone">Phone Number</label>


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
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingOwner}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default LocationEditForm