import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Calendar from './components/Calendar/Calendar';
import Notes from './components/Notes/Notes';
import Team from './components/Team/Team';

function App() {
  return (
    <Router>
        <div className="dashboard-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/team" element={<Team />} />
              {/* Add other routes... */}
            </Routes>
          </main>
        </div>
    </Router>
  );
}

export default App;