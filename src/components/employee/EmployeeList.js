import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    deleteEmployee = id => {
        EmployeeManager.delete(id)
            .then(() => {
                EmployeeManager.getAll()
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
        EmployeeManager.getAll()
            .then((data) => {
                this.setState({
                    employees: data
                })
            })
    }

    render() {
        console.log("EmployeeList: Render");
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