import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './components/home/Home'
import AnimalList from './components/animal/AnimalList'
import LocationList from './components/location/LocationList'
import EmployeeList from './components/employee/EmployeeList'
import OwnerList from './components/owner/OwnerList'
import AnimalDetail from './components/animal/AnimalDetail'
import LocationDetail from './components/location/LocationDetail'
import AnimalForm from './components/animal/AnimalForm'
import EmployeeForm from './components/employee/EmployeeForm'
import Login from './components/auth/Login'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/login" component={Login} />

        <Route path="/animals/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          if (this.isAuthenticated()) {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          if (this.isAuthenticated()) {
            return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props}/>
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews