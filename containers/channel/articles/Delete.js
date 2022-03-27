import React from "react";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { getCookie } from "../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { articleDelete } from "../../../store/actions/user/article";
import { useRouter } from "next/router";

const useStyle = makeStyles({
  align: {
    marginRight: 50,
  },
});

const DeleteArticle = ({ article }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const channelId = router.query.channels;
  const channels = useSelector((state) => state.channel);

  const classes = useStyle();
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    dispatch(articleDelete(id, channelId, channels.limit));
  };

  return (
    <Fragment>
      <div>
        <Button
          className={classes.align}
          color="primary"
          variant="contained"
          size="small"
          onClick={() => handleClickOpen(article._id)}
        >
          Delete
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete these records? This process cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              handleDelete(article._id);
            }}
            color="primary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DeleteArticle;
