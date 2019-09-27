import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("Employee LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAll()
    .then((data) => {
        this.setState({
            employees: data
        })
    })
}

render(){
    console.log("Employee LIST: Render");

    return(
        <div className="container-cards">
            {this.state.employees.map(employee => <EmployeeCard />)}
        </div>
    )
}
}

export default EmployeeList