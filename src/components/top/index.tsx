import React from "react";
import Box from "@mui/material/Box";

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
import SubTitle5 from "./SubTitle5";
import Img5 from "./Image5";
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
      <Movie />
      <SubTitle1 />
      <Body1 />
      <Box mt={8} mb={4}>
        <SubTitle2 />
      </Box>

      <Img2 />
      <Box my={8}>
        <SubTitle3 />
      </Box>

      <Img3 />
      <Body2 />
      <Img4 />
      <Box my={10}>
        <SubTitle4 />
      </Box>
      <Img5 />
      <PreRegister />
    </Box>
  );
};

export default Index;
