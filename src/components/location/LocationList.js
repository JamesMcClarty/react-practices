import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

componentDidMount(){
    console.log("Location LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    LocationManager.getAll()
    .then((data) => {
        this.setState({
            Locations: data
        })
    })
}

render(){
    console.log("Location LIST: Render");

    return(
        <div className="container-cards">
            {this.state.locations.map(location => <LocationCard />)}
        </div>
    )
}
}

export default LocationList