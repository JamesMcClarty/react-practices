import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    deleteEmployee = id => {
        APIManager.delete(id, "employees")
            .then(() => {
                APIManager.getAll("employees")
                    .then((newEmployees) => {
                        this.setState({
                            employees: newEmployees
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("Employee LIST: ComponentDidMount");
        //getAll from EmployeeManager and hang on to that data; put it in state
        APIManager.getAll("employees")
            .then((data) => {
                this.setState({
                    employees: data
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Employees:</h3>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/employees/new") }}>
                        Hire Employee
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.employees.map(employee =>
                        <EmployeeCard key={employee.id} employee={employee} deleteEmployee = {this.deleteEmployee} {...this.props}/>
                    )}
                </div>
            </div>
        )
    }
}

export default EmployeeList