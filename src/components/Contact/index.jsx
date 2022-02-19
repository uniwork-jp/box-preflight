import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Zoom from "@material-ui/core/Zoom";
import TextField from "@material-ui/core/TextField";

import apiCall from "./apiCall";

const url =
  "https://asia-northeast1-honma-lp.cloudfunctions.net/F1_adressStock";

// const Transition = React.forwardRef((props, ref) => (
//   <Zoom direction="up" ref={ref} {...props} />
// ));

export default ({ id, dialogOn, setDialogOn }) => {
  //   input

  console.log("dialog");
  console.log("dion", dialogOn);
  const [mailAddress, setMailAddress] = useState("");
  const [text, setText] = useState("");
  const [validate, setValidate] = useState(true);
  //   API call
  const [fetching, setFetching] = useState(false);
  //   snack bar
  const [barOn, setBarOn] = useState(false);
  const [isError, setIsError] = useState(false);
  //   radio button
  const [value, setValue] = useState(null);
  // console.log('vd', validate);
  // console.log('fetch', fetching);
  // console.log('error', isError);
  // console.log('mailAddress', mailAddress);

  //   validate for email input
  useEffect(() => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
      text,
      value
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
          setText("");
        }
      })
      .then(() => {
        setBarOn(true);
      });
  };
  const barData = {
    success: {
      severity: "success",
      comment: "受け付けました。ありがとうございます。返信をお待ちください。"
    },
    failed: {
      severity: "error",
      comment: "送信に失敗しました。お手数ですがメールにてお問合せください。"
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      className="contact"
      key="contact-dialog"
      open={!!dialogOn}
      keepMounted
      onClose={handleClose}
      fullWidth
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <p className="text-a dialog-title">本間正道に相談する</p>
        <p className="text-b">ご相談内容をお聞かせください</p>
        <TextField
          id={`${id}-mail`}
          label="メールアドレス"
          required
          autoFocus
          fullWidth
          margin="normal"
          error={validate}
          size="small"
          onChange={e => setMailAddress(e.target.value)}
          value={mailAddress}
        />
        <div className="mail-address-field">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="顧問" control={<Radio />} label="顧問" />
            <FormControlLabel
              value="マネジメントコンサル"
              control={<Radio />}
              label="マネジメントコンサル"
            />
            <FormControlLabel value="研修" control={<Radio />} label="研修" />
            <FormControlLabel value="講演" control={<Radio />} label="講演" />
            <FormControlLabel
              value="その他"
              control={<Radio />}
              label="その他"
            />
          </RadioGroup>
        </div>
        <TextField
          id={`${id}-text`}
          label="ご相談内容"
          variant="outlined"
          multiline
          rows="4"
          fullWidth
          size="small"
          onChange={e => setText(e.target.value)}
          value={text}
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

// TransitionComponent={Transition}
