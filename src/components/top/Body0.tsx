import React from "react";
import Box from "@mui/material/Box";
import Conteiner from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const styles = {
  container: { mt: 3, mb: 10, maxWidth: "sm" },
  title: { typography: "h5" },
  titleBox: { my: 4, p: 2 },
  body1: { my: 1 },
};

const Index: React.VFC = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleBox}>
        <Typography sx={styles.title}>家具のように美しい</Typography>
        <Typography sx={styles.title}>ミニマリストのための</Typography>
        <Typography sx={styles.title}>新しいモジュール収納「box」</Typography>
      </Box>
      <Box>
        <Typography sx={styles.body1}>
          これまでの人生で溜め込んできたあれこれを見直し、スッキリと暮らしたい。
        </Typography>
        <Typography sx={styles.body1}>
          それは決して、ただ「ものを減らす」というだけでなく「ものを大事にする」というマインド。
        </Typography>
        <Typography sx={styles.body1}>
          かつて人々が、桐のタンスに着物や貴重品などをしまって保管していたように。
        </Typography>
        <Typography sx={styles.body1}>
          ひとつひとつのものへの扱い方、向き合い方に配慮する生き方。
        </Typography>
        <Typography sx={styles.body1}>
          そんな本当の意味での「ミニマリスト」に一歩近づくための、
        </Typography>
        <Typography sx={styles.body1}>
          新しい収納のかたち。それが「box」です。
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
