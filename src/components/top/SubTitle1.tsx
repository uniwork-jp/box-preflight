import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { subTitle, subTitleBox } from "../../../themes/styles";

const styles = {
  title: {
    typography: "h4",
    textAlign: "center",
  },
  titleBox: {
    // display: "flex",
    // flexDirection: "column",
    my: 4,
    p: 2,
  },
};

const SubTitle: React.VFC = () => {
  return (
    <Box sx={subTitleBox}>
      <Typography sx={subTitle}>家具のように美しい</Typography>
      <Typography sx={subTitle}>ミニマリストのための</Typography>
      <Typography sx={subTitle}>新しいモジュール収納「box」</Typography>
    </Box>
  );
};

export default SubTitle;
