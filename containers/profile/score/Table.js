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
  const payment = useSelector((state) => state.payment);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Point</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Total Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payment.scoreList.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{moment(item.createdAt).format("ll")}</TableCell>
              <TableCell>
                {item.description.length > 80
                  ? item.description.slice(0, 80) + "..."
                  : item.description}
              </TableCell>
              <TableCell align="right">{item.points}.00</TableCell>
              <TableCell align="right">{item.mode}</TableCell>
              <TableCell align="right">{item.totalScore}.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
