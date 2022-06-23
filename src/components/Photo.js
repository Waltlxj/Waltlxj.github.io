import React, { useRef } from "react";
import data from "../data.json";

const Photos = () => {
  const titleRef = useRef();

  React.useEffect(() => {
    setTimeout(() => {
      titleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      // console.log('hi')
      // window.scroll({ top: 350, behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <div ref={titleRef} className="docs-section" data-theme="dark">
      <h6 className="docs-header">Photos</h6>
      {data.photos.map((p, index) => (
        <a data-flickr-embed="true" href={p.ref} title={p.title} key={index}>
          <img
            className="photo"
            src={p.source}
            alt={p.alt}
            style={{
              padding: "3rem 0 15rem 0",
              width: "100%",
              cursor: "default",
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default Photos;
