import React from "react";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player/lazy";

const styles = {
  box: { p: 2, height: "64%" },
};

const Movie: React.VFC = () => {
  return (
    <Box sx={styles.box}>
      <ReactPlayer
        width="100%"
        url="https://www.youtube.com/watch?v=Dgh0pZBGhq4"
      />
    </Box>
  );
};

export default Movie;
