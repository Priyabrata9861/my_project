import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedId = localStorage.getItem('Id');
        const employee = Employees.find(emp => emp.id === storedId);
        if (employee) {
            setName(employee.Name);
            setAge(employee.Age);
            setId(employee.id);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployees = Employees.map(emp => {
            if (emp.id === id) {
                return { ...emp, Name: name, Age: age };
            }
            return emp;
        });
        console.log("Updated employees:", updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        console.log("Employees in localStorage:", JSON.parse(localStorage.getItem('employees')));
        navigate("/", { updatedData: updatedEmployees });
    }

    return (
        <div>
            <Form className="d-grid-gap-2" style={{ margin: "15rem" }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Button type="submit">Save</Button>
            </Form>
        </div>
    );
}

export default Edit;
