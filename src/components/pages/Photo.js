import React, { useRef } from "react";
import PageMotionWrapper from "../PageMotionWrapper";
import Footer from "../Footer";

import { motion } from "framer-motion";

export const Photos = ({ data }) => {
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
        {/* <h6 className="docs-header">Photos</h6> */}
        <div className="gallery">
          {data.photos.map((p, index) => (
            <a
              data-flickr-embed="true"
              href={p.ref}
              title={p.title}
              key={index}
            >
              <motion.img
                className={p.portrait ? "photo portrait" : "photo"}
                src={p.source}
                alt={p.alt}
                loading="lazy"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.6 }}
                viewport={{ once: false }}
              />
            </a>
          ))}
        </div>
      </div>
      <Footer links={data.intro.links}></Footer>
    </PageMotionWrapper>
  );
};
