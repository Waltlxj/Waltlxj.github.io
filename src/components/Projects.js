import React from "react";

const Tag = ({ tag }) => {
  return (
    <div
      style={{
        border: "solid 1px gray",
        borderRadius: "2px",
        fontSize: "1rem",
        margin: "0 0.8rem 0.8rem 0",
        padding: "0 0.5rem 0 0.5rem",
      }}
    >
      {tag}
    </div>
  );
};

const TagCollection = ({ tags }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </div>
  );
};

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
      <TagCollection tags={info.tags} />
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
