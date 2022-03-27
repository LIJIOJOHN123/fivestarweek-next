import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  table: {},
  debit: {
    color: "red",
  },
  credit: {
    color: "green",
  },
});

export default function TransactionTable({ sponsoredChannel }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Visitors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sponsoredChannel.viewIp.length === 0 && (
            <Typography style={{ marginLeft: 20, marginTop: 20 }}>
              No report available
            </Typography>
          )}
          {sponsoredChannel.viewIp.map((item) => (
            <TableRow key={item._id.date}>
              <TableCell>{item._id.date}</TableCell>
              <TableCell>{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
