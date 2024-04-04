import React from 'react';
import Home from './Components.jsx/Home';
import Add from './Components.jsx/Add';
import Edit from './Components.jsx/Edit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from './Components.jsx/View';

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Add />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/view' element={<View />} />
          </Routes>
        </Router>
      </div>
     
    </>

  );
}

export default App;

