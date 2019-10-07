import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  state={
    searchKeyWord: ""
  }

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }

  handleSearch = () => {
    console.log("pushing")
    this.props.history.push(`/search/${this.state.searchKeyWord}`)
  }

  updateSearch = event => {
    console.log(event.target.value)
      this.setState({searchKeyWord:event.target.value})
  }

  render() {
    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            {(this.props.user) ?
              <li><Link className="nav-link" to="/animals">Animals</Link></li>
              : null}
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            {(this.props.user) ?
              <>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li><Link className="nav-link" to="/owners">Owners</Link></li>
                <li>
                  <input
                    type="text"
                    required
                    id="search"
                    placeholder="Search Here!"
                    onKeyUp = {this.updateSearch}></input>
                </li>
                <li><button id = "submit-button" onClick = {this.handleSearch}>Submit</button></li>
                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
              </>
              : <li><Link className="nav-link" to="/login">Login</Link></li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);