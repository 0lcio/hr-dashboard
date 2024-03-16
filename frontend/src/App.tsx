import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Calendar from './components/Calendar/Calendar';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  return (
    <Router>
        <div className="dashboard-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/team" element={<Team />} />
              {/* Add other routes... */}
            </Routes>
          </main>
        </div>
    </Router>
  );
}

export default App;