import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { subTitle, subTitleBox } from "../../../themes/styles";

const SubTitle: React.VFC = () => {
  return (
    <Box sx={subTitleBox}>
      <Typography sx={subTitle}>
        アーティスティックな家具を手がける、
      </Typography>
      <Typography sx={subTitle}>岡山県のYOUBIが製作を担当。</Typography>
      <Typography sx={subTitle}>ディテールへのこだわりは、</Typography>
      <Typography sx={subTitle}>美術工芸品なみ。</Typography>
    </Box>
  );
};

export default SubTitle;
