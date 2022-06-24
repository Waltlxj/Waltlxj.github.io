import React from "react";
import poster from "../assets/COVID_PT_Poster_4.0.jpg";

const Poster = () => {
  const [expanded, setExpanded] = React.useState(false);
  const changeExpanded = () => {
    setExpanded(!expanded);
    // console.log("Changed expanded!");
  };
  return (
    <div
      onClick={changeExpanded}
      style={{
        display: "block",
        height:
          window.innerWidth < 750
            ? 0.6 * window.innerWidth + "px"
            : expanded
            ? "480px"
            : "80px",
        marginBottom: "2rem",
        cursor: "pointer",
        overflow: "hidden",
        transition: "800ms",
      }}
    >
      <img
        src={poster}
        alt="Poster presentation of research"
        style={{ width: "100%" }}
      />
    </div>
  );
};

const Psychology = ({ psychData }) => {
  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="docs-section">
      <h6 className="docs-header">Psychology</h6>
      <p>{psychData.introduction}</p>
      <br />

      <h6 className="docs-header">Research</h6>
      <h6 className="example-header">{psychData.research[0].title}</h6>
      <p>{psychData.research[0].description}</p>
      <Poster />
      <br />

      <h6 className="example-header">{psychData.research[1].title}</h6>
      <p>
        {" "}
        I had always heard about the intrinsicality and cross-cultural
        similarity of emotion expressions (Ekman et al. 1972), but more recent
        research has been noticing the cross-cultural differences of emotions
        and turning to{" "}
        <a
          href="https://plato.stanford.edu/entries/emotion/#BehaEcolViewPsycConsSociConsEmotCons"
          target="blank"
          style={{
            textDecorationLine: "underline",
            textDecorationStyle: "dotted",
          }}
        >
          psychological constructionism
        </a>{" "}
        to understand emotions and emotion perception. Intrigued by the
        socialization and enculturation aspect of emotion and emotion
        perception, I joined{" "}
        <a
          href="https://asclab.yale.edu/"
          target="blank"
          style={{
            textDecorationLine: "underline",
            textDecorationStyle: "dotted",
          }}
        >
          Affective Science and Culture Lab
        </a>{" "}
        at Yale in Summer 2020 to:
      </p>
      <p>
        1. explore the cross-cultural (American and Chinese) linguistic
        differences in mental state inference
      </p>
      <p>
        2. inspect the ambiguous nature of affect labeling by compare people's
        peripheral physiological responses to different facial expressions
        including novel expressions extracted from cross-cultural contexts.
      </p>
    </div>
  );
};

export default Psychology;
