import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

import apiCall from "./apiCall";

const url =
  "https://us-west2-romantic-strength-finder.cloudfunctions.net/F01-ContactHandler";

const Contact: React.VFC = ({
  consulAddless,
  consultant,
  dialogOn,
  setDialogOn,
}) => {
  //   input
  console.log("dialog");
  const [mailAddress, setMailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [validate, setValidate] = useState(true);
  //   API call
  const [fetching, setFetching] = useState(false);
  //   snack bar
  const [barOn, setBarOn] = useState(false);
  const [isError, setIsError] = useState(false);
  //   radio button
  const [value, setValue] = useState(null);
  // const strengths = useSelector(s => s.strengths);
  // const strength = {};
  // strengths.forEach((s, i) => {
  //   strength[String(i + 1)] = s.en !== "" ? s : false;
  // });
  // console.log('s', strength);

  useEffect(() => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(mailAddress).toLowerCase())) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [mailAddress]);

  const handleClose = () => setDialogOn(false);
  const sentMessage = async () => {
    const obj = {
      mailAddress,
      message,
    };
    setFetching(true);
    await apiCall(url, obj)
      .then(response => {
        if (response === false) {
          setIsError(true);
        } else {
          console.log("res", response);
          setFetching(false);
          setIsError(false);
          setMailAddress("");
          setMessage("");
        }
      })
      .then(() => {
        setBarOn(true);
      });
  };
  const barData = {
    success: {
      severity: "success",
      comment: "受け付けました。ありがとうございます。返信をお待ちください。",
    },
    failed: {
      severity: "error",
      comment: "送信に失敗しました。お手数ですがメールにてお問合せください。",
    },
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Dialog open={dialogOn} onClose={handleClose} fullWidth>
      <DialogTitle>事前登録受付</DialogTitle>
      <DialogContent>
        <Typography>{consulAddless}</Typography>
        <Typography mb={1}>
          から返事を受け取れるメールアドレスを教えてください
        </Typography>
        <TextField
          label="メールアドレス"
          required
          autoFocus
          fullWidth
          error={validate}
          size="small"
          onChange={e => setMailAddress(e.target.value)}
          value={mailAddress}
        />
        <Typography mt={4} mb={1}>
          ご質問、ご要望があれば教えてください
        </Typography>
        <TextField
          label="メッセージ"
          variant="outlined"
          multiline
          rows="4"
          fullWidth
          size="small"
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="事前情報を受け取る"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          戻る
        </Button>
        <Button
          onClick={sentMessage}
          color="primary"
          disabled={!(!fetching && !validate)}
        >
          送信
        </Button>
        <Snackbar
          open={barOn}
          autoHideDuration={6000}
          onClose={() => setBarOn(false)}
        >
          <Alert
            onClose={() => {
              setBarOn(false);
              setDialogOn(false);
            }}
            severity={
              isError ? barData.failed.severity : barData.success.severity
            }
          >
            {isError ? barData.failed.comment : barData.success.comment}
          </Alert>
        </Snackbar>
      </DialogActions>
    </Dialog>
  );
};

export default Contact;
