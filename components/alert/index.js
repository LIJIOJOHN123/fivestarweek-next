import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

export default function AlertComponent({ alert }) {
  const [state, setState] = React.useState({
    open: true,
    vertical: "bottom",
    horizontal: "left",
    msg: alert.msg,
    type: alert.alertType,
  });
  const { vertical, horizontal, open, msg, type } = state;

  const handleClose = () => {
    setState({
      ...state,
      open: false,
      vertical: null,
      horizontal: null,
      msg: "",
      type: "",
    });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert variant="filled" severity={type}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
