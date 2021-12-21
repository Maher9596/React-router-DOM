import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/users">USERS</Link>
      </nav>
        
      <Routes>
        <Route path = "/" element={<Home />} />          
        <Route  path = "/users" element={<Users />} />
        <Route  path = "/users/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
