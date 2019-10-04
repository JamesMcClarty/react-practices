import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
      locationName: "",
      phone: "",
      loadingStatus: false,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedLocation = {
        id: this.props.match.params.locationId,
        locationName: this.state.locationName,
        phone: this.state.phone
      };

      APIManager.update(editedLocation, "locations")
      .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
      APIManager.get(this.props.match.params.locationId, "locations")
      .then(location => {
          this.setState({
            locationName: location.locationName,
            phone: location.phone,
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
                id="locationName"
                value={this.state.locationName}
              />
              <label htmlFor="locationName">Location Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phone"
                value={this.state.phone}
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
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