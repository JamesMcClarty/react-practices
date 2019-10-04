import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import OwnerCard from '../owner/OwnerCard'

class AnimalsWithOwners extends Component {
    state = {
        animal: {},
        owners: [],
    }

    deleteOwner = id => {
        APIManager.delete(id, "owners")
            .then(() => {
                APIManager.getObjectWithDatabase(this.props.match.params.animalId, "animals", "owners")
            .then((APIResult) => {
                this.setState({
                    animal: APIResult,
                    owners: APIResult.owners,
                })
            })
            })
    }

    componentDidMount() {
        //got here now make call to get animal with owners
        APIManager.getObjectWithDatabase(this.props.match.params.animalId, "animals", "owners")
            .then((APIResult) => {
                this.setState({
                    animal: APIResult,
                    owners: APIResult.owners,
                })
            })
    }

    render() {

        if (this.state.owners.length !== 0) {
            return (
                <div className="card">
                    <p>Animal: {this.state.animal.name}</p>

                    {this.state.owners.map(owner =>
                        <OwnerCard
                            key={owner.id}
                            owner={owner}
                            state = {this.state.loadingStatus}
                            deleteOwner = {this.deleteOwner}
                            {...this.props}
                        />
                    )}
                </div>
            )
        }

        else {
            return (
                <div className="card">
                    <p>{this.state.animal.name} doesn't have any owners...</p>
                </div>
            )
        }
    }
}

export default AnimalsWithOwners;