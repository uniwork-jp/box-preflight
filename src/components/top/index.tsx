import React from "react";
import Box from "@mui/material/Box";

import Hero from "./Hero";
import Body1 from "./Body1";
import PreRegister from "./PreRegister";

const Index: React.VFC = () => {
  return (
    <Box>
      <Hero />
      <Body1 />
      <PreRegister />
    </Box>
  );
};

export default Index;
