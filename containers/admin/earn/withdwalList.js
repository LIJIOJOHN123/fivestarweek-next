import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { withdrawalList } from "../../../store/actions/admin/user";
const WithdrawalList = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(withdrawalList());
  }, [dispatch]);
  const user = useSelector((state) => state.user);
  return (
    <Fragment>
      <Typography>dslakfjdakls</Typography>
    </Fragment>
  );
};

export default WithdrawalList;
