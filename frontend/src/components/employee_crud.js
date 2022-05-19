import { useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./api";

const AddEmployee = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [employee_id, setEmployeeId] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    refreshEmployees();
  }, []);

  const refreshEmployees = () => {
    API.get("/")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, last_name };
    API.post("/", item).then(() => refreshEmployees());
  };

  const onUpdate = (id) => {
    let item = {name, last_name};
    if (id == null)
    {
      alert("select a employee for update")
      return
    }
    API.patch(`/${id}/`, item).then((res) => refreshEmployees());
  };

  const onDelete = (id) => {
    API.delete(`/${id}/`).then((res) => refreshEmployees());
  };

  function selectEmployee(id) {
    let item = employees.filter((employee) => employee.employee_id === id)[0];
    setName(item.name);
    setLastName(item.last_name);
    setEmployeeId(item.employee_id);
  }

  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-md-4">
          <h3 className="float-left">Create a new Employee</h3>
          <Form onSubmit={onSubmit} className="mt-4">
            <Form.Group className="mb-3" controlId="formBasicName">

              <Form.Label>Current employee_id: {employee_id}</Form.Label>
              <br/>
              <Form.Label>{employee_id} Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>


            <div className="float-right">
              <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
                className="mx-2"
              >
                Save
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => onUpdate(employee_id)}
                className="mx-2"
              >
                Update
              </Button>
            </div>
          </Form>
        </div>


        <div className="col-md-8 m">
          <table className="table">
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
              {employees.map((employee, index) => {
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
                        onClick={() => selectEmployee(employee.employee_id)}
                      ></i>
                      <i
                        className="fa fa-trash-o text-danger d-inline mx-3"
                        aria-hidden="true"
                        onClick={() => onDelete(employee.employee_id)}
                      ></i>
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

export default AddEmployee;