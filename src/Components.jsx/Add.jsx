import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import Employees from './Employees';
import { v4 as uuid } from 'uuid'; 
import { useNavigate } from 'react-router-dom';

function Add() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || age.trim() === '') {
            setShowError(true);
            return;
        }
        const uniqueId = uuid(); 
        const a = name;
        const b = age;
        
        Employees.push({ id: uniqueId, Name: a, Age: b });
        localStorage.setItem('employees', JSON.stringify(Employees));
        navigate("/");
    }

    return (
        <div>
            <Form className="d-grid-gap-2" style={{ margin: "15rem" }}>
                {showError && <Alert variant="danger">Please fill in all fields.</Alert>}
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={handleSubmit} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Add;
