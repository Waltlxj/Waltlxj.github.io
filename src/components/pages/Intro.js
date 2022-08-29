import React from "react";
import PageMotionWrapper from "../PageMotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "../Footer";

const Intro = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const changeHobby = () => {
    setIndex(index + 1);
    //console.log(index)
  };
  setTimeout(changeHobby, 1800);

  React.useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  const hobbies = data.intro.hobbies;

  return (
    <PageMotionWrapper>
      <div className="docs-section">
        <h2 className="docs-header">About me</h2>
        <p> {data.intro.introduction} </p>
        <p>
          I like{" "}
          <AnimatePresence mode="wait">
            <Hobby
              key={index.toString()}
              text={hobbies[index % hobbies.length]}
            />
          </AnimatePresence>
        </p>
      </div>
      <Footer links={data.intro.links}></Footer>
    </PageMotionWrapper>
  );
};

const Hobby = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {text}.
    </motion.span>
  );
};

export default Intro;
