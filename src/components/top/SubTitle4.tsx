import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { subTitle, subTitleBox } from "../../../themes/styles";

const SubTitle: React.VFC = () => {
  return (
    <Box sx={subTitleBox}>
      <Typography sx={subTitle}>デザインおよび発案者は</Typography>
      <Typography sx={subTitle}>数々の受賞歴を持つ</Typography>
    </Box>
  );
};

export default SubTitle;
