import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

const Movie: React.VFC = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  console.log("window");
  useEffect(() => {
    const w = window.innerWidth > 630 ? 630 : window.innerWidth;
    const h = w * 0.65;
    setWidth(w);
    setHeight(h);
  }, []);

  return (
    <ReactPlayer
      width={width}
      height={height}
      url="https://www.youtube.com/watch?v=Dgh0pZBGhq4"
    />
  );
};

export default Movie;
