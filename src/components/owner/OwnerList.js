import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    deleteOwner = id => {
        APIManager.delete(id, "owners")
            .then(() => {
                APIManager.getAll("owners")
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

componentDidMount(){
    console.log("Owner LIST: ComponentDidMount");
    //getAll from OwnerManager and hang on to that data; put it in state
    APIManager.getAll("owners")
    .then((data) => {
        this.setState({
            owners: data
        })
    })
}

render(){
    console.log("Owner LIST: Render");

    return(
        <div>
        <h3>Owners</h3>
        <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/owners/new") }}>
                    Add Owner
                    </button>
        <div className="container-cards">
            {this.state.owners.map(owner => <OwnerCard key = {owner.id} owner = {owner} deleteOwner = {this.deleteOwner} {...this.props}/>)}
        </div>
        </div>
    )
}
}

export default OwnerList