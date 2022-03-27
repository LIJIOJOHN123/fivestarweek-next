import React from "react";
import RadioButtonsGroup from "./LanguageSelection";
import { Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LanguageIcon from "@mui/icons-material/Language";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: 20,
    marginRight: 40,
    paddingRight: 20,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "white",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "black",
      },
    },
  },
}))(MenuItem);
const useStyle = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
  icon: {
    backgroundColor: "#092c74",
    color: "white",
    marginRight: 20,
  },
}));

export default function LangaugeDrop() {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <LanguageIcon
        size="large"
        className={classes.icon}
        onClick={handleClick}
      />

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ marginLeft: 10 }}>
          <RadioButtonsGroup />
        </div>
      </StyledMenu>
    </div>
  );
}
