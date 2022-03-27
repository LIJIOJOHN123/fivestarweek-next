import { Typography, Button } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryblock,
  categoryUnblock,
} from "../../../store/actions/admin/user";
import CategoryCreate from "./Create";
import Box from "@mui/material/Box";
import CategoryAddChannel from "./AddChannel";
import CategoryRemoveChannel from "./RemoveChannel";
const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: {
    width: "100%",
    height: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  borderColor: "gray",
};
const UserList = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <CategoryCreate />
      {user.categories.map((item) => (
        <div key={item._id} style={{ marginBottom: 10 }}>
          <Box border={1} {...defaultProps}>
            <div style={{ display: "flex" }}>
              <Typography>
                {item.category} - {item.localCategory} - {item.status}
              </Typography>
            </div>
            <div style={{ display: "flex", marginLeft: 100 }}>
              <CategoryAddChannel id={item._id} />
              <CategoryRemoveChannel id={item._id} />

              <Button onClick={() => dispatch(categoryblock(item._id))}>
                Block
              </Button>
              <br />
              <Button onClick={() => dispatch(categoryUnblock(item._id))}>
                Unblock
              </Button>
            </div>
            <Typography style={{ marginLeft: 100, fontWeight: "bold" }}>
              channels
            </Typography>
            {item.channels.map((channel) => (
              <div key={channel._id}>
                <Typography style={{ color: "blue", marginLeft: 100 }}>
                  {channel}
                </Typography>
              </div>
            ))}
          </Box>
        </div>
      ))}
    </Fragment>
  );
};

export default UserList;
