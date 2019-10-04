import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import {firstLetterCase} from '../../modules/Helpers'
//import './AnimalDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      phone: "",
      loadingState: true,
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({loadingStatus: true})
    APIManager.delete(this.props.locationId, "locations")
    .then(() => this.props.history.push("/locations"))
}

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    APIManager.get(this.props.locationId, "locations")
    .then((location) => {
      this.setState({
        name: location.locationName,
        phone: location.phone,
        loadingState: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(this.state.name)}</span></h3>
            <p>Phone Number: {this.state.phone}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;