import React from "react";
import "./Intro.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Intro = ({ introData }) => {
  const [index, setIndex] = React.useState(0);
  const changeHobby = () => {
    setIndex(index + 1);
    //console.log(index)
  };
  setTimeout(changeHobby, 1600);

  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    // console.log(introData);
  }, []);

  const hobbies = introData.hobbies;

  return (
    <div className="docs-section">
      <h6 className="docs-header">About me</h6>
      <p> {introData.introduction} </p>
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
        {introData.links.map((link, index) => (
          <a className="icon" href={link.url} target="blank" key={index}>
            <i className={`${link.className} fa-lg`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Intro;
