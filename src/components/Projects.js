import React from "react";

const Project = ({ info }) => {
  return (
    <div
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <a href={info.link} target="blank">
        <h6 className="example-header">{info.title}</h6>
      </a>
      <ul>
        {info.description.map((para, index) => (
          <li key={index}>{para}</li>
        ))}
      </ul>
    </div>
  );
};

const Projects = ({ projectsData }) => {
  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="docs-section">
      <h6 className="docs-header">Programming Projects</h6>
      {projectsData.map((p, index) => (
        <Project key={index} info={p} />
      ))}
    </div>
  );
};

export default Projects;
