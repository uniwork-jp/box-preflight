import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";

// const styles = {
//   box: { p: 2, height: "64%" },
// };

const Index: React.VFC = () => {
  return (
    <Box>
      <StaticImage src="../../images/img1.jpg" alt="A dinosaur" />
    </Box>
  );
};

export default Index;
