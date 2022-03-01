import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { subTitle, subTitleBox } from "../../../themes/styles";

const SubTitle: React.VFC = () => {
  return (
    <Box sx={subTitleBox}>
      <Typography sx={subTitle}>高級家具に使われる</Typography>
      <Typography sx={subTitle}>国産のヒノキ材を使用。</Typography>
    </Box>
  );
};

export default SubTitle;
