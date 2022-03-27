import React, { Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  MailruIcon,
  TelegramIcon,
} from "react-share";

export default function ShareDialog({ id }) {
  const [open, setOpen] = React.useState(false);
  const shareSection = (
    <Fragment>
      <FacebookShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <FacebookIcon size={50} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <WhatsappIcon size={50} round style={{ marginRight: 20 }} />
      </WhatsappShareButton>
      <FacebookMessengerShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <FacebookMessengerIcon size={50} round style={{ marginRight: 20 }} />
      </FacebookMessengerShareButton>

      <RedditShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <RedditIcon size={50} round />
      </RedditShareButton>
      <TwitterShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <TwitterIcon size={50} round />
      </TwitterShareButton>
      <TelegramShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <TelegramIcon size={50} round />
      </TelegramShareButton>
      <LinkedinShareButton
        url={`${process.env.DOMAIN}/articles/${id}`}
        style={{ marginRight: 20 }}
      >
        <LinkedinIcon size={50} round />
      </LinkedinShareButton>
    </Fragment>
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "gray",
        }}
        onClick={handleClickOpen}
      >
        <ShareIcon
          onClick={handleClickOpen}
          fontSize={"small"}
          style={{ color: "gray", marginRight: 10 }}
        />
        SHARE
      </Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Share with your friends"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {shareSection}
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
