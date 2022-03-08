import React from "react";
import Box from "@mui/material/Box";
import Conteiner from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { bodyBox, bodyText, subTitle } from "../../../themes/styles";

const styles = {
  br: {
    mb: 12,
  },
};

const BodyText: React.VFC = () => {
  return (
    <Box sx={bodyBox}>
      <Typography sx={subTitle}>おさまりのいいサイズ。</Typography>
      <Typography sx={bodyText}>小はB5サイズ　182×257mm</Typography>
      <Typography sx={bodyText}>中はB4サイズ　257mm×364mm </Typography>
      <Typography sx={{ ...bodyText, ...styles.br }}>
        大はB3サイズ　364×515mm
      </Typography>
      <Typography sx={subTitle}>自由自在に組み立てられ、</Typography>
      <Typography sx={subTitle}>持ち運べるモジュール感。</Typography>
    </Box>
  );
};

export default BodyText;
