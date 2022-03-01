import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { subTitle, subTitleBox } from "../../../themes/styles";

const SubTitle: React.VFC = () => {
  return (
    <Box sx={subTitleBox}>
      <Typography sx={subTitle}>ミニマリスト建築家・堤庸策氏。</Typography>
    </Box>
  );
};

export default SubTitle;
