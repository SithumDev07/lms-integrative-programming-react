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
import AssigmentTab from "../../components/AssigmentTab";
import MarkSelect from "../../components/MarksSelect";
import Stack from "@mui/material/Stack";

function createData(studentid, marks) {
  return { studentid, marks };
}

const rows = [
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
  createData("IM-2019-xx"),
];

export default function TeacherCourse() {
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
          Information System Modeling
        </Typography>
        <FlexContainer
          sx={{
            mt: 8,
          }}
        ></FlexContainer>
        <TableContainer sx={{ maxWidth: 600 }} component={Paper} align="center">
          <Table
            sx={{ maxWidth: 600 }}
            size="small"
            aria-label="a dense table"
            align="center"
          >
            <TableHead>
              <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell align="center">Assigment Marks</TableCell>
                <TableCell align="center">Evaluate Students</TableCell>
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
                  <TableCell align="center">{<MarkSelect />}</TableCell>
                  <TableCell align="center">
                    {
                      <Stack direction="row" align="center">
                        <Button variant="contained">Evaluate</Button>
                      </Stack>
                    }
                  </TableCell>{" "}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
