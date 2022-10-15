import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(studentid, marks) {
  return { studentid, marks };
}

const rows = [
  createData("IM-2019-xx", 159, 6.0, 24, 4.0),
  createData("IM-2019-xx", 237, 9.0, 37, 4.3),
  createData("IM-2019-xx", 262, 16.0, 24, 6.0),
];

export default function Evaluate() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell align="right">Assigment Marks</TableCell>
            <TableCell align="right">Edit Marks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.studentid}
              </TableCell>
              <TableCell align="right">{row.marks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
