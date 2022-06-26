import React, { useEffect, useState } from "react";
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
import dataService from "./services/data";

import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { shuffle } from "./utils/shuffle";

const Content = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // console.log(location.pathname)
  const theme = location.pathname === "/photos" ? "dark" : "light";
  // console.log(theme)
  if (theme === "dark") {
    document.body.style = "background: black;";
  } else {
    document.body.style = "background: white;";
  }

  // fetch data
  useEffect(() => {
    dataService.getData().then((responseData) => {
      // console.log(responseData);
      responseData.photos = shuffle(responseData.photos);
      setData(responseData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div></div>;
  }

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
              <Route path="/" element={<Intro introData={data.intro} />} />
              <Route
                path="/projects"
                element={<Projects projectsData={data.projects} />}
              />
              <Route
                path="/psyc"
                element={<Psychology psychData={data.psych} />}
              />
              <Route
                path="/photos"
                element={<Photos photosData={data.photos} />}
              />
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
