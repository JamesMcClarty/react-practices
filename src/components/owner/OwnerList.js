import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
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
    OwnerManager.getAll()
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