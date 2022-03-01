import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Contact from "./Contact";

import Img6 from "./Image6";

const styles = {
  subTitle: {
    typography: "h5",
    textAlign: "center",
    mt: 6,
    mb: 4,
  },
  text: {
    color: "text.body",
    fontSize: "1.2rem",
  },
  textBox: {
    my: 6,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    my: 3,
  },
  subText: {
    typography: "subText",
    mt: 4,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    minWidth: 150,
    p: 2,
    px: 4,
    mt: 6,
    mb: 2,
    color: "#fff",
    fontSize: "1.3rem",
    fontWeight: 700,
    bgcolor: "black",
    boxShadow: "3px 3px 8px #bebebe, -15px -15px 30px #ffffff",
    ":active": {
      boxShadow: "none",
    },
  },
};

const PreRegister: React.VFC = () => {
  const [dialogOn, setDialogOn] = useState(false);

  return (
    <Box sx={styles.textBox}>
      <Typography sx={styles.subTitle}>
        優先配送キャンペーン実施中！！
      </Typography>
      <Typography sx={styles.text}>
        こちらのページより事前登録頂いた方を対象に、優先配送致します。
      </Typography>
      <Typography sx={styles.text}>
        以下ボタンより事前登録フォームをご登録ください。
      </Typography>
      <Typography sx={styles.text}>
        登録いただいた先着順に、優先的に御配送させて頂きます。
      </Typography>
      <Typography sx={styles.subText}>
        ※基本的には制作期間はクラウドファウンディング場で
        告示された配送時期に配送するものとなり、
        告示期間を大幅に早回る形で発送されるわけでは ございません。{" "}
      </Typography>
      <Box sx={styles.buttonBox}>
        <Box onClick={() => setDialogOn(true)} sx={styles.button}>
          事前予約フォーム
        </Box>
      </Box>
      <Contact
        url="https://us-west2-romantic-strength-finder.cloudfunctions.net/F01-ContactHandler"
        consulAddless="some@gmail.com"
        dialogOn={dialogOn}
        setDialogOn={setDialogOn}
      />
      <Box sx={{ textAlign: "center" }}>
        <Img6 />
      </Box>
    </Box>
  );
};

export default PreRegister;
