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
import { useSelector } from "react-redux";

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

export default function TransactionTable({ pay }) {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Total Availble</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.earningsList.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{moment(item.createdAt).format("ll")}</TableCell>
              <TableCell>
                {item.description.length > 80
                  ? item.description.slice(0, 80) + "..."
                  : item.description}
              </TableCell>
              <TableCell align="right">{item.type}</TableCell>
              <TableCell align="right">
                {item.status === true ? "approved" : "pending"}
              </TableCell>
              <TableCell align="right">Rs:{item.amount}.00</TableCell>
              <TableCell align="right">Rs:{item.balance}.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
