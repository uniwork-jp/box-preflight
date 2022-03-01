import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import { imgBox } from "../../../themes/styles";

const Img: React.VFC = () => {
  return (
    <Box sx={imgBox}>
      <StaticImage src="../../images/image3.jpg" alt="items" />
    </Box>
  );
};

export default Img;
