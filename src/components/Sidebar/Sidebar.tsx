import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(location.pathname);

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  const handleClick = (path: string) => {
    setSelectedLink(path);
  }

  return (
    <div>
      <h2 className={styles.companylogo}>Company logo</h2>
      <nav className={styles.sidebar}>
        <ul>
          <li><Link to="/" className={selectedLink === "/" ? styles.selected : ""} onClick={() => handleClick("/")}><span className={styles.linkText}>Dashboard</span></Link></li>
          <li><Link to="/projects" className={selectedLink === "/projects" ? styles.selected : ""} onClick={() => handleClick("/projects")}><span className={styles.linkText}>Projects</span></Link></li>
          <li><Link to="/calendar" className={selectedLink === "/calendar" ? styles.selected : ""} onClick={() => handleClick("/calendar")}><span className={styles.linkText}>Calendar</span></Link></li>
          <li><Link to="/team" className={selectedLink === "/team" ? styles.selected : ""} onClick={() => handleClick("/team")}><span className={styles.linkText}>Team</span></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;