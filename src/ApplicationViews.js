import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './components/home/Home'
import AnimalList from './components/animal/AnimalList'
import LocationList from './components/location/LocationList'
import EmployeeList from './components/employee/EmployeeList'
import OwnerList from './components/owner/OwnerList'
import AnimalDetail from './components/animal/AnimalDetail'
import LocationDetail from './components/location/LocationDetail'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews