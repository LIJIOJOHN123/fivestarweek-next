import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import FormControl from "@mui/material/FormControl";
import moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useDispatch } from "react-redux";
import { replyBlock, replyUnblock } from "../../../store/actions/admin/user";
const ReplyTable = ({ replies }) => {
  const columns = [
    { name: "_id" },
    { name: "user" },
    { name: "article", options: { display: false } },
    { name: "comment" },
    { name: "reply" },
    { name: "userName", options: { display: false } },
    { name: "status" },
    {
      name: "createdAt",
      options: {
        customBodyRender: (value) => moment(value).fromNow(),
      },
    },
  ];
  const dispatch = useDispatch();

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    rowsPerPage: 100,
    responsive: "vertical",
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: (dataIndex, expandedRows) => {
      if (dataIndex === 3 || dataIndex === 4) return false;

      if (
        expandedRows.data.length > 4 &&
        expandedRows.data.filter((d) => d.dataIndex === dataIndex).length === 0
      )
        return false;
      return true;
    },
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>userId:{rowData[6]}</TableCell>
        </TableRow>
      );
    },

    customToolbarSelect: (selectedRows) => (
      <Tooltip title="edit">
        <IconButton>
          <Button
            color="primary"
            varaint="contained"
            onClick={() => {
              dispatch(replyBlock(replies[selectedRows.data[0].dataIndex]._id));
            }}
          >
            Block
          </Button>
          <Button
            color="primary"
            varaint="contained"
            onClick={async () => {
              dispatch(
                replyUnblock(replies[selectedRows.data[0].dataIndex]._id)
              );
            }}
          >
            Unblock
          </Button>
        </IconButton>
      </Tooltip>
    ),
  };

  return (
    <React.Fragment>
      <FormControl></FormControl>
      <MUIDataTable
        title={"User Management"}
        data={replies}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
};

export default ReplyTable;
