// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Calendar from './components/Calendar/Calendar';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className="dashboard-content">
                {isLoggedIn ? (
                    <>
                        <Sidebar />
                        <main>
                            <Routes>
                                <Route path="/home" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/team" element={<Team />} />
                                {/* Add other routes... */}
                            </Routes>
                        </main>
                    </>
                ) : (
                    <Login onLogin={handleLogin} /> 
                )}
            </div>
        </Router>
    );
}

export default App;