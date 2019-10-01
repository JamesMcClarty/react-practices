import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
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
        LocationManager.getAll()
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
                <div className="container-cards">
                    {this.state.locations.map(location =>
                        <LocationCard key={location.id} object={location} deleteLocation = {this.deleteLocation}/>
                    )}
                </div>
            </div>
        )
    }
}

export default LocationList