import React, { Component } from 'react'
import AnimalCard from './animal/animalCard'
import LocationCard from './location/locationCard'
import EmployeeCard from './employee/employeeCard'
import OwnerCard from './owner/ownerCard'
import './kennel.css'

class Kennel extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Student Kennels<br />
            <small>Loving care when you're not there.</small>
          </h2>
          <address>
            <LocationCard />
          </address>
          <EmployeeCard />
        </div>
        <div>
          <AnimalCard />
          <OwnerCard />
          <AnimalCard />
          <OwnerCard />
          <AnimalCard />
          <OwnerCard />
        </div>
      </div>
    );
  }
}

export default Kennel;