import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Intro from "./components/Intro";
import Photos from "./components/Photo";
import Projects from "./components/Projects";
import Psychology from "./components/Psych";

import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Content = () => {
  const location = useLocation();
  // console.log(location.pathname)
  const theme = location.pathname === "/photos" ? "dark" : "light";
  // console.log(theme)
  return (
    <div className="page" data-theme={theme}>
      <div className="container">
        <header className="header">
          <h2> Hello, I am Walt. </h2>
        </header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-link" to="/" alt="About Me">
                {/* About me */}
                <i className="fa-solid fa-user fa-xl"></i>
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/projects"
                alt="Programming Projects"
              >
                {/* Programming Projects */}
                <i className="fa-solid fa-code fa-xl"></i>
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className="navbar-link"
                to="/psyc"
                alt="Psychology Research"
              >
                {/* Psychology research */}
                <i className="fa-solid fa-brain fa-xl"></i>
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/photos" alt="Photography">
                {/* Photography */}
                <i className="fa-solid fa-camera fa-xl"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            <Routes location={location}>
              <Route path="/" element={<Intro />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/psyc" element={<Psychology />} />
              <Route path="/photos" element={<Photos />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
