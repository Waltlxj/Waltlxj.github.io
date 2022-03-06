import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import Intro from './components/Intro'
import Projects from './components/Projects'

function App() {

  return (
    <Router>
      <div className='container'>
        <header className='header'>
          <h2> Hello, I am Walt </h2>
        </header>
        <nav className='navbar'>
          <ul className="navbar-list">
            <li className="navbar-item"><Link className="navbar-link" to='/intro'>Intro</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/projects'>Projects</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/photos'>Photography</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/psyc'>Psychology research</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/more'>More</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/intro" element={<Intro/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/photos" element={<p>photos</p>} />
          <Route path="/psyc" element={<p>Psychology</p>} />
          <Route path="/more" element={<p>more</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
