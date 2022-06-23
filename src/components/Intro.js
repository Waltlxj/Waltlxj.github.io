import React from "react";
import "./Intro.css";
import data from "../data.json";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const hobbies = data.intro.hobbies;

const Intro = () => {
  const [index, setIndex] = React.useState(0);
  const changeHobby = () => {
    setIndex(index + 1);
    //console.log(index)
  };
  setTimeout(changeHobby, 1600);

  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="docs-section">
      <h6 className="docs-header">About me</h6>
      <p> {data.intro.introduction} </p>
      <p>
        {" "}
        I like
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={index}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade-inline"
          >
            <span> {hobbies[index % hobbies.length]}.</span>
          </CSSTransition>
        </SwitchTransition>
      </p>

      <div className="icon-list" style={{ paddingTop: "3rem" }}>
        {data.intro.links.map((link, index) => (
          <a className="icon" href={link.url} target="blank" key={index}>
            <i className={`${link.className} fa-lg`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Intro;
