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
import Typography from "@mui/material/Typography";
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
            <TableCell width="10%">Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payment.payment.length === 0 && (
            <Typography style={{ marginLeft: 20, marginTop: 20 }}>
              No payment
            </Typography>
          )}
          {payment.payment.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{moment(item.createdAt).format("ll")}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell align="right">{item.type}</TableCell>
              <TableCell
                align="right"
                className={
                  (item.type == "Credit" && classes.credit,
                  item.type == "Debit" && classes.debit)
                }
              >
                Rs.{item.amount}.00
              </TableCell>
              <TableCell align="right">Rs.{item.balance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
