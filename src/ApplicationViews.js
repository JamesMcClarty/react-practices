import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './components/home/Home'
import AnimalCard from './components/animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './components/location/LocationCard'
import EmployeeCard from './components/employee/EmployeeCard'
import OwnerCard from './components/owner/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews