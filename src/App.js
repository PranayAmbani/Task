import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ManufacturerDashboard from './components/ManufacturerDashboard';
import TransporterDashboard from './components/TransporterDashboard';
import ManufacturersInputForm from './components/ManufacturersInputForm';
import TransportersInputForm from './components/TransportersInputForm';




  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('userType');

  
  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        isAuthenticated && userRole === "Manufacturer" ? (
    <Route path="/manufacturer" element={<ManufacturerDashboard />} />)
    isAuthenticated && userRole === "Manufacturer" ? (
    <Route path="/manufacturer/inputs" element={<ManufacturersInputForm />} />)
    isAuthenticated && userRole === "Transporter" ? (
    <Route path="/transporter" element={<TransporterDashboard />} />)
    isAuthenticated && userRole === "Transporter" ? (
    <Route path="/transporter/inputs" element={<TransportersInputForm />} />)
      </Routes>
    </Router>
  );
};

export default App;
