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
      </Box>
    </Box>
  );
}
