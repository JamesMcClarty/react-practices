import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './components/home/Home'
import AnimalCard from './components/animal/AnimalCard'
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
         <Route path="/locations" render={(props) => {
          return <LocationCard />
        }} />
         <Route path="/owners" render={(props) => {
          return <OwnerCard />
        }} />
         <Route path="/employees" render={(props) => {
          return <EmployeeCard />
        }} />
        
      </React.Fragment>
    )
  }
}

export default ApplicationViews