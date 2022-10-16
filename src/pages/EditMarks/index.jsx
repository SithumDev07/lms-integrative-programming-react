import * as React from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar as CustomAppBar, CustomDrawer } from "../../lib";
import { DrawerHeader } from "../../lib/CustomDrawer";
import Typography from "@mui/material/Typography";
import { FlexContainer } from "../../components";
function createData(studentid, marks) {
  return { studentid, marks };
}

const rows = [
  createData("IM-2019-xx", 159, 6.0, 24, 4.0),
  createData("IM-2019-xx", 237, 9.0, 37, 4.3),
  createData("IM-2019-xx", 262, 16.0, 24, 6.0),
];

export default function Evaluate() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar */}
      <CustomAppBar open={open} setOpen={setOpen} />
      <CustomDrawer open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 3, p: 4 }}>
        <DrawerHeader />
        <Typography variant="h3" component="h3">
          Information System Modeling - Assigment 2
        </Typography>
        <FlexContainer
          sx={{
            mt: 8,
          }}
        ></FlexContainer>
        <TableContainer sx={{ maxWidth: 600 }} component={Paper}>
          <Table sx={{ maxWidth: 600 }} size="small" aria-label="a dense table">
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
                  <TableRow>
                    <Button variant="outlined">Primary</Button>
                  </TableRow>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
