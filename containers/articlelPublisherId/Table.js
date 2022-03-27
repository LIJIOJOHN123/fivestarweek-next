import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles({
  table: {},
  debit: {
    color: "red",
  },
  credit: {
    color: "green",
  },
});

export default function TransactionTable({ sponsoredArticle }) {
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
          {sponsoredArticle.viewIp.length === 0 && (
            <Typography style={{ marginLeft: 20, marginTop: 20 }}>
              No report available
            </Typography>
          )}
          {sponsoredArticle.viewIp.map((item) => (
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
