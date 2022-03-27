import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  premiumUserApprove,
  premiumUserList,
} from "../../../store/actions/admin/user";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  debit: {
    color: "red",
  },
  credit: {
    color: "green",
  },
});

export default function TransactionTable() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(premiumUserList(200));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">mobile</TableCell>
            <TableCell align="right">amount</TableCell>
            <TableCell align="right">referuser</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.premiumUserList.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{moment(item.createdAt).format("ll")}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.mobile}</TableCell>
              <TableCell align="right">{item.amount}.00</TableCell>
              <TableCell align="right">{item.user}</TableCell>
              <TableCell align="right">{item.status}</TableCell>

              <button
                style={{ marginRight: 20, color: "green", marginTop: 15 }}
                onClick={() => dispatch(premiumUserApprove(item._id))}
              >
                approve
              </button>
              {/* <button style={{ marginRight: 20, color: "blue", marginTop: 15 }}>
                approve payment
              </button> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
