import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Candle } from "../animations";

const animations = [<Candle />];

const Header = () => {
  const [isTitleVisible, setIsTitleVisible] = React.useState(true);
  const [animationIndex, setAnimationIndex] = React.useState(0);
  const startAnimation = () => {
    setIsTitleVisible(false);
    setAnimationIndex(animationIndex + 1);
    // console.log(animationIndex);
    setTimeout(() => {
      setIsTitleVisible(true);
    }, 8000);
  };
  return (
    <>
      <header>
        <AnimatePresence mode="wait">
          {isTitleVisible && (
            <motion.h1
              className="header-color title"
              key="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                backgroundPosition: ["100% 55%", "0% 55%", "100% 55%"],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                },
              }}
              onClick={startAnimation}
            >
              Walt Li
            </motion.h1>
          )}
          {!isTitleVisible && (
            <motion.div
              key="animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {animations[animationIndex % animations.length]}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
