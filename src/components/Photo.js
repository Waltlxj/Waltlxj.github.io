import React, { useRef } from "react";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Photos = ({ photosData }) => {
  const titleRef = useRef();
  photosData = shuffle(photosData);

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
      <div style={{ textAlign: "center" }}>
        {photosData.map((p, index) => (
          <a data-flickr-embed="true" href={p.ref} title={p.title} key={index}>
            <img
              className="photo"
              src={p.source}
              alt={p.alt}
              style={{
                padding: "3rem 0 15rem 0",
                width: p.portrait && window.innerWidth > 750 ? "65%" : "100%",
                cursor: "default",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Photos;
