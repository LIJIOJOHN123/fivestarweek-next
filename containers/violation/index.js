import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getCookie } from "../../utils/auth";
import { articleViolation } from "../../store/actions/user/article";
import { commentViolation } from "../../store/actions/user/comment";
import { replyViolation } from "../../store/actions/user/reply";
import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const Violation = ({ id, source }) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFomData] = React.useState({
    reason: "",
  });
  const { reason } = formData;
  const handleChange = (reason) => (e) => {
    setFomData({ ...formData, [reason]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const cclose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleClose1 = async () => {
    if (source === "article") {
      dispatch(articleViolation(formData, id));
    } else if (source === "comment") {
      dispatch(commentViolation(formData, id));
    }
    setFomData({
      reason: "",
    });
  };
  const view = (
    <Fragment>
      <Typography
        style={{
          color: "red",
          paddingRight: 5,
          paddingLeft: 5,
        }}
        onClick={handleClickOpen}
        color="secondary"
      >
        report
      </Typography>

      <Dialog open={open} onClose={cclose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Violation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please notify us immediatly any TOS violation
          </DialogContentText>
          <TextField
            autoFocus
            label="Vialation"
            value={reason}
            type="text"
            margin="normal"
            onChange={handleChange("reason")}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cclose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose1} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );

  return <Fragment>{view}</Fragment>;
};
export default Violation;
