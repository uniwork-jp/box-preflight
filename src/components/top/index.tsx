import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";

import Hero from "./Hero";
import SubTitle1 from "./SubTitle1";
import Movie from "./Movie";
import Body1 from "./Body1";
import SubTitle2 from "./SubTitle2";
import Img2 from "./Image2";
import SubTitle3 from "./SubTitle3";
import Img3 from "./Image3";
import Body2 from "./Body2";
import Img4 from "./Image4";
import SubTitle4 from "./SubTitle4";
import Img5 from "./Image5";
import SubTitle5 from "./SubTitle5";

import PreRegister from "./PreRegister";

const styles = {
  container: {
    maxWidth: 630,
    m: "0 auto",
  },
};

const Index: React.VFC = () => {
  return (
    <Box sx={styles.container}>
      <Hero />
      <Movie />
      <SubTitle1 />
      <Body1 />
      <SubTitle2 />
      <Img2 />
      <SubTitle3 />
      <Img3 />
      <Body2 />
      <Img4 />
      <SubTitle4 />
      <Img5 />
      <SubTitle5 />
      <PreRegister />
    </Box>
  );
};

export default Index;
