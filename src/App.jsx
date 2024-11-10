import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todoapp from './pages/Todoapp'
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todoapp />} />
      </Routes>
    </Router>
  );
}

export default App
