import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/Helpers'

import "./Animal.css"
import { format } from 'util';

class AnimalCard extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h2>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button"
        onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/details`) }}>Details</button>
          <button type="button"
            onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;