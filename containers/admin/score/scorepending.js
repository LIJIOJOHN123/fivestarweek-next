import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scoreListPending } from "../../../store/actions/admin/user";
const ScorePendingList = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(scoreListPending());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <Fragment>
      <Typography>dafjslkjlk</Typography>
    </Fragment>
  );
};

export default ScorePendingList;
