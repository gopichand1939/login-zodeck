import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from './pages/LoginPage';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
       
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;