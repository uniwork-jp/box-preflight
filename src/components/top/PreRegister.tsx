import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Contact from "./Contact";

const styles = {
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
  button: {
    display: "flex",
    justifyContent: "center",
    minWidth: 150,
    p: 1,
    borderRadius: "16px",
    color: "secondary.main",
    fontSize: "1.3rem",
    fontWeight: 700,
    bgcolor: "primary.main",
    textShadow: "1px 1px 0 white",
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
      <Typography sx={styles.text}>
        事前登録をいただいた方優先で商品発送させていただきます。
      </Typography>
      <Box sx={styles.buttonBox}>
        <Box onClick={() => setDialogOn(true)} sx={styles.button}>
          事前登録
        </Box>
      </Box>
      <Contact
        url="https://us-west2-romantic-strength-finder.cloudfunctions.net/F01-ContactHandler"
        title="全部の恋愛資質を知る"
        consulAddless="some@gmail.com"
        dialogOn={dialogOn}
        setDialogOn={setDialogOn}
      />
    </Box>
  );
};

export default PreRegister;
