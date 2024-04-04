import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';

function Vieww() {
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
    return (
        <div>
            <Form className="d-grid-gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} readOnly />
                </Form.Group>
                <Button onClick={() => navigate("/")} variant="primary">Back</Button>
            </Form>
        </div>
    );
}

export default Vieww;
