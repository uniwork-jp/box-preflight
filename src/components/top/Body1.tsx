import React from "react";
import Box from "@mui/material/Box";
import Conteiner from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { bodyBox, bodyText } from "../../../themes/styles";

const styles = {
  br: {
    mb: 2,
  },
};

const BodyText: React.VFC = () => {
  return (
    <Box sx={bodyBox}>
      <Typography sx={{ ...bodyText, ...styles.br }}>
        これまでの人生で溜め込んできたあれこれを見直し、スッキリと暮らしたい。
      </Typography>
      <Typography sx={{ ...bodyText, ...styles.br }}>
        それは決して、ただ「ものを減らす」というだけでなく「ものを大事にする」
      </Typography>
      <Typography sx={{ ...bodyText, ...styles.br }}>
        というマインド。
      </Typography>
      <Typography sx={bodyText}>
        かつて人々が、桐のタンスに着物や貴重品などをしまって保管していたように。
      </Typography>
      <Typography sx={bodyText}>
        ひとつひとつのものへの扱い方、向き合い方に配慮する生き方。
      </Typography>
      <Typography sx={bodyText}>
        そんな本当の意味での「ミニマリスト」に一歩近づくための、
      </Typography>
      <Typography sx={bodyText}>
        新しい収納のかたち。それが「box」です。
      </Typography>
    </Box>
  );
};

export default BodyText;
