import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import { imgBox } from "../../../themes/styles";

const Img: React.VFC = () => {
  return (
    <Box sx={imgBox}>
      <StaticImage src="../../images/image5.jpg" alt="items2" />
    </Box>
  );
};

export default Img;
