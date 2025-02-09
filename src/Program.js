import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import App from './App';
import Home from './Home';

function Program() {
  return (
    <div>
        <Router>
        <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/home' element={<Home/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default Program