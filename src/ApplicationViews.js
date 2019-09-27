import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './components/home/Home'
import AnimalList from './components/animal/AnimalList'
import LocationList from './components/location/LocationList'
import EmployeeList from './components/employee/EmployeeList'
import OwnerList from './components/owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
         <Route path="/locations" render={(props) => {
          return <LocationList />
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