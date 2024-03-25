import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Calendar from './components/Calendar/Calendar';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    
    useEffect(() => {
        const jwt = localStorage.getItem('jwt') || sessionStorage.getItem('jwt');
        if (jwt) {
          // Update your application's state to indicate that the user is logged in
          // This will depend on how you're managing state in your application
          setIsLoggedIn(true);
        }
      }, []);

    return (
        <Router>
            <div className="dashboard-content">
                {isLoggedIn ? (
                    <>
                        <Sidebar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
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