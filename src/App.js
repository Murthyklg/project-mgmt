import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//import pages
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  const {user, authIsReady} = useAuthContext()
  return (
    <div className="App">
      {authIsReady &&( 
      <BrowserRouter>
      <Sidebar/>
          <div className='container'>
            <Navbar/>
            <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Signup" element={<Signup />} />
                  <Route path="/Project" element={<Project />} />
                  <Route path="/Create" element={<Create />} />
            </Routes>
          </div>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
