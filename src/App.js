import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Intro from "./components/pages/Intro";
import Photos from "./components/pages/Photo";
import Projects from "./components/pages/Projects";
import Psychology from "./components/pages/Psych";

import dataService from "./services/data";

import { shuffle } from "./utils/shuffle";

import NavBar from "./components/NavBar";
import Header from "./components/Header";

const Content = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // console.log(location.pathname)
  const theme = location.pathname === "/photos" ? "dark" : "light";
  // console.log(theme)
  if (theme === "dark") {
    document.body.style = "background: #0d0d0f;";
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
        <Header />
        <NavBar />
        <Routes location={location}>
          <Route path="/" element={<Intro data={data} />} />
          <Route path="/projects" element={<Projects data={data} />} />
          <Route path="/psyc" element={<Psychology data={data} />} />
          <Route path="/photos" element={<Photos data={data} />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

export default App;
