import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../api/service/CourseService";
import {
  FlexContainer,
  GreetingHeader,
  HighlightedCourse,
} from "../../components";
import Calendar from "../../components/Calendar";
import { HIGHLIGHTED_COURSES } from "../../data/courses";
import { AppBar as CustomAppBar, CustomDrawer } from "../../lib";
import { DrawerHeader } from "../../lib/CustomDrawer";
import { store } from "../../store";
import { showAlert } from "../../store/reducers/errorSlice";
import { login } from "../../store/reducers/loginSlice";
import { TOASTIFY_ERROR_FONTS } from "../../utils/constants";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TeacherDashboard() {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
