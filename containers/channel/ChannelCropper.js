import React, { Fragment } from "react";
import Cropper from "react-easy-crop";
import { Slider, Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getCookie } from "../../utils/auth";
// import { profileAvatar } from "../../actions/02 user/02 profile";
import axios from "axios";
import Router from "next/router";

const useStyle = makeStyles((them) => ({
  container: {
    height: "50vh",
    width: "80vh",
    backgroundColor: "white",
    position: "relative",
  },

  containerCropper: {
    height: "90%",
    padding: "10px",
  },

  cropper: {
    height: "90%",
    position: "relative",
  },

  slider: {
    height: "10%",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    width: "60%",
  },
}));

export default function AvatarEdit({ id, handleClose, setOpen }) {
  const classes = useStyle();
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [avatar, resetAvatar] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [imageFile, setImageFile] = React.useState(null);
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const token = getCookie("token");

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const handleSubmit = async () => {
    setOpen(false);
    const formData = new FormData();
    formData.append("avatar", avatar, avatar.name);
    try {
      const res = await axios.post(
        `${process.env.SERVER_API}/channel/upload/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      res && Router.reload();
    } catch (error) {}
  };
  return (
    <div className={classes.container}>
      <div className={classes.containerCropper}>
        {image ? (
          <>
            <div className={classes.cropper}>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className={classes.slider}>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
          </>
        ) : null}
      </div>
      {image == null && (
        <Typography align="center" style={{ marginTop: -100 }}>
          {" "}
          Please upload image file{" "}
        </Typography>
      )}
      <Box textAlign="center">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={(event) => {
            onSelectFile(event), resetAvatar(event.target.files[0]);
          }}
          style={{ display: "none" }}
        />

        {!image && (
          <Button
            variant="contained"
            color="primary"
            onClick={triggerFileSelectPopup}
            style={{ marginRight: "10px" }}
          >
            Choose
          </Button>
        )}
        {image && (
          <Fragment>
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              style={{ marginRight: "10px" }}
              onClick={() => setImage(null)}
              color="primary"
            >
              Clear
            </Button>
          </Fragment>
        )}
      </Box>
    </div>
  );
}
