import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {Link,useNavigate} from "react-router-dom";
function Home() {
  const navigate=useNavigate();
  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
  }

  const handleDelete = (id) => {
    const index=Employees.map(function(e){
             return e.id
    }).indexOf(id);
    Employees.splice(index,1);
    navigate('/')
  }

  return (
  
    <div style={{margin:"15rem"}}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { (
            Employees.map((Item) => (
              <tr key={Item.id}>
                <td>{Item.Name}</td>
                <td>{Item.Age}</td>
                <td>
                <Link to={'/edit'}>
                    <Button className='mx-2'onClick={() => handleEdit(Item.id, Item.Name, Item.Age)}>Update</Button>
                  </Link>
                  <Link to={'/view'}>
                    <Button className='mx-2'onClick={() => handleEdit(Item.id, Item.Name, Item.Age)}>View</Button>
                  </Link>
                  <Button className='mx-2 btn-danger'onClick={() => handleDelete(Item.id)}>Delete</Button>
                  
                </td>
              </tr>
            ))
          ) }
        </tbody> 
      </Table>
      <Link className='d-flex justify-content-center align-items-center' to="/create">
                <Button className="btn-sucess">Create</Button>
                  </Link>
    </div>
   
  );
}

export default Home;

