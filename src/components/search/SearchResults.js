import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import AnimalCard from '../animal/AnimalCard'

class SearchResults extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: []
    };

    componentDidMount() {
        console.log("Mounting")
        var searchSplit = this.props.location.pathname.split("/")
        console.log(searchSplit[2])
        APIManager.searchDatabase(searchSplit[2], "animals", "name").then(data => {
            console.log(data)
            this.setState({ animals: data })
    })
    }

    render() {
        return (
            <>
                <div className="container">
                    {this.state.animals.map(animal =>
                        <AnimalCard key={animal.id} animal={animal} {...this.props} />
                    )}
                </div>
            </>
        )
    }
}
export default SearchResults