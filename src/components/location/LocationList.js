import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    deleteLocation = id => {
        APIManager.delete(id, "locations")
            .then(() => {
                APIManager.getAll("locations")
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("Location LIST: ComponentDidMount");
        //getAll from LocationManager and hang on to that data; put it in state
        APIManager.getAll("locations")
            .then((data) => {
                this.setState({
                    locations: data
                })
            })
    }

    render() {
        console.log("Location LIST: Render");
        return (
            <div>
                <h3>Locations:</h3>
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/locations/new") }}>
                    Add Location
                    </button>
                <div className="container-cards">
                    {this.state.locations.map(location =>
                        <LocationCard key={location.id} object={location} deleteLocation={this.deleteLocation} {...this.props}/>
                    )}
                </div>
            </div>
        )
    }
}

export default LocationList