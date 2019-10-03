import React, { Component } from 'react'
import AnimalManager from '../../modules/AnimalManager'
import OwnerManager from '../../modules/OwnerManager'
import OwnerCard from '../owner/OwnerCard'

class AnimalsWithOwners extends Component {
    state = {
        animal: {},
        owners: []
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                AnimalManager.getWithOwners(this.props.match.params.animalId)
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    componentDidMount() {
        //got here now make call to get animal with owners
        AnimalManager.getWithOwners(this.props.match.params.animalId)
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