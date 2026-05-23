import {  Component } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./api";

class AddEmployee extends Component { //= ({ onAdd }) =>
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            last_name: "",
            employee_id: null,
            employees: []
        }
    }

    refreshEmployees() {
        API.get("/")
            .then((res) => {
                this.setState({employees: res.data});
            })
            .catch(console.error);
    };

    onSubmit(e) {
        e.preventDefault();
        let name = this.state.name
        let last_name = this.state.last_name
        let item = {
            name,
            last_name
        };
        API.post("/", item).then(() => this.refreshEmployees());
    };

    onUpdate(id) {
        let name = this.state.name
        let last_name = this.state.last_name
        let item = {
            name,
            last_name
        };
        API.patch(`/${id}/`, item).then((res) => this.refreshEmployees());
    };

    onDelete(id) {
        API.delete(`/${id}/`).then((res) => this.refreshEmployees());
    };

    selectEmployee(id) {
        let item = this.state.employees.filter((employee) => employee.employee_id === id)[0];
        this.setState({
            name:item.name,
            last_name:item.last_name,
            employee_id:item.employee_id

        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-4">
                        <h3 className="float-left">Create a new Employee</h3>
                        <Form onSubmit={this.onSubmit} className="mt-4">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>{this.state.employee_id} Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => this.setState({name:e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicGenre">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={this.state.last_name}
                                    onChange={(e) => this.setState({last_name:e.target.value})}
                                />
                            </Form.Group>


                            <div className="float-right">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={this.onSubmit}
                                    className="mx-2"
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="primary"
                                    type="button"
                                    onClick={() => this.onUpdate(this.state.employee_id)}
                                    className="mx-2"
                                >
                                    Update
                                </Button>
                            </div>
                        </Form>
                    </div>


                    <div className="col-md-8 m">
                        <table className ="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Date of entry</th>
                                <th scope="col"/>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.employees.map((employee, index) => {
                                return (
                                    <tr key="">
                                        <th scope="row">{employee.employee_id}</th>
                                        <td> {employee.name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>{employee.date_of_entry}</td>
                                        <td>
                                            <i
                                            className="fa fa-pencil-square text-primary d-inline"
                                            aria-hidden="true"
                                            onClick={() => this.selectEmployee(employee.employee_id)}
                                            />
                                            <i
                                            className="fa fa-trash-o text-danger d-inline mx-3"
                                            aria-hidden="true"
                                            onClick={() => this.onDelete(employee.employee_id)}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

}

export default AddEmployee;