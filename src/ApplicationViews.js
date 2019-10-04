import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './components/home/Home'
import AnimalList from './components/animal/AnimalList'
import LocationList from './components/location/LocationList'
import EmployeeList from './components/employee/EmployeeList'
import OwnerList from './components/owner/OwnerList'
import AnimalsWithOwners from './components/animal/AnimalsWithOwners'
import LocationDetail from './components/location/LocationDetail'
import AnimalForm from './components/animal/AnimalForm'
import EmployeeForm from './components/employee/EmployeeForm'
import LocationForm from './components/location/LocationForm'
import OwnerForm from './components/owner/OwnerForm'
import Login from './components/auth/Login'
import AnimalEditForm from './components/animal/AnimalEditForm'
import EmployeeEditForm from './components/employee/EmployeeEditForm'
import LocationEditForm from './components/location/LocationEditForm'
import OwnerEditForm from './components/owner/OwnerEditForm'
import LocationsWithEmployees from "./components/location/LocationsWithEmployees"
import SearchResults from './components/search/SearchResults'


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
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/animals/new" render={(props) => {
          if (this.props.user) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)/details" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          if (this.props.user) {
            return <AnimalsWithOwners {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.props.user) {
            return <LocationList {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)/details" render={(props) => {
          if (this.props.user) {
            return <LocationsWithEmployees {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/new" render={(props) => {
          if (this.props.user) {
            return <LocationForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          if (this.props.user) {
            return <OwnerForm {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          if (this.props.user) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />
        <Route
          path="/owners/:ownerId(\d+)/edit" render={props => {
            return <OwnerEditForm {...props} />
          }}
        />
        <Route
          path="/search/:searchKeyWord(\d+)" render={props => {
            return <SearchResults {...props} />
          }}
        />
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews