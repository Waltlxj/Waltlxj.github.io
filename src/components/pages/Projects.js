import React, { useRef } from "react";
import PageMotionWrapper from "../PageMotionWrapper";
import Footer from "../Footer";

const Tag = ({ tag }) => {
  return (
    <div
      style={{
        border: "solid 1px gray",
        borderRadius: "2px",
        fontSize: "0.75rem",
        margin: "0 0.4rem 0.4rem 0",
        padding: "0 0.25rem 0 0.25rem",
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
    <a href={info.link} target="blank">
      <div className="example-block">
        <h3 className="example-header">{info.title}</h3>

        <ul>
          {info.description.map((para, index) => (
            <li key={index}>{para}</li>
          ))}
        </ul>
        <TagCollection tags={info.tags} />
      </div>
    </a>
  );
};

export const Projects = ({ data }) => {
  const titleRef = useRef();

  React.useEffect(() => {
    titleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, []);

  return (
    <PageMotionWrapper>
      <div ref={titleRef} className="docs-section">
        <h2 className="docs-header">Programming Projects</h2>
        {data.projects.map((p, index) => (
          <Project key={index} info={p} />
        ))}
      </div>
      <Footer links={data.intro.links}></Footer>
    </PageMotionWrapper>
  );
};
