import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className='container'>
        <header className='header'>
          <h2> Hello, I am Walt! </h2>
          <p> I am a current junior Psychology and CS major at Carleton College, MN. </p>
        </header>
        <nav className='navbar'>
          <ul className="navbar-list">
            <li className="navbar-item"><Link className="navbar-link" to='/intro'>Intro</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/projects'>Project</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/photos'>Photography</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/psyc'>Psychology research</Link></li>
            <li className="navbar-item"><Link className="navbar-link" to='/more'>More</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/intro" element={<p>intro</p>} />
          <Route path="/projects" element={<p>projects</p>} />
          <Route path="/photos" element={<p>photos</p>} />
          <Route path="/psyc" element={<p>Psychology</p>} />
          <Route path="/more" element={<p>more</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
