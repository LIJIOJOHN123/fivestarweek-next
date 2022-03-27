import React from "react";
import { withStyles, makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { premiumUser } from "../../store/actions/user/auth";
import { getCookie } from "./../../utils/auth";
import axios from "axios";
import Router from "next/router";
import { Grid, Paper } from "@mui/material";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  button: {
    marginLeft: 20,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddPayment() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const user = useSelector((state) => state.auth);
  const tokens = getCookie("token");
  const formData = {
    purpose: "Purchased subscription for one year",
    amount: 299,
    webhook_url: "/webhook",
  };
  const formData1 = {
    purpose: "Purchased subscription for one year",
    amount: 499,
    webhook_url: "/webhook",
  };
  const formData2 = {
    purpose: "Purchased subscription for one year",
    amount: 999,
    webhook_url: "/webhook",
  };
  const handleClose1 = async () => {
    setOpen(false);
    const res = await axios.post(
      `${process.env.SERVER_API}/userpremium`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    Router.push(res.data);
  };
  const handleClose2 = async () => {
    setOpen(false);
    const res = await axios.post(
      `${process.env.SERVER_API}/userpremium`,
      formData1,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    Router.push(res.data);
  };
  const handleClose3 = async () => {
    setOpen(false);
    const res = await axios.post(
      `${process.env.SERVER_API}/userpremium`,
      formData2,
      {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      }
    );
    Router.push(res.data);
  };
  const handleClose = async () => {
    setOpen(false);
  };
  return (
    <div>
      {tokens && (
        <Typography
          variant="contained"
          align="center"
          style={{ marginLeft: 80, color: "#092C74", fontWeight: "bold" }}
          onClick={handleClickOpen}
        >
          Click here to become prime member
        </Typography>
      )}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid container style={{ padding: 40 }}>
          <Grid item lg={4}>
            <Typography>get 350 points</Typography>
            <Typography>higher user visibility</Typography>
            <Button autoFocus onClick={handleClose1} color="primary">
              Pay Rs: 299
            </Button>
          </Grid>
          <Grid item lg={4}>
            <Typography>auto vefified profile</Typography>
            <Typography>auto verified channels</Typography>

            <Button autoFocus onClick={handleClose2} color="primary">
              Pay Rs: 499
            </Button>
          </Grid>
          <Grid item lg={4}>
            <Typography>auto vefified profile</Typography>
            <Typography>auto verified channels</Typography>

            <Button autoFocus onClick={handleClose3} color="primary">
              Pay Rs: 999
            </Button>
          </Grid>
          <Typography onClick={() => Router.push("/premium")}>
            {" "}
            For more details please www.fivestarweek.com
          </Typography>
        </Grid>
      </Dialog>
    </div>
  );
}
