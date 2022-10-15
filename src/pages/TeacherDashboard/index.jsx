import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../../api/service/CourseService";
import { FlexContainer, HighlightedCourse } from "../../components";
//import Calendar from "../../components/Calendar";
import { HIGHLIGHTED_COURSES } from "../../data/courses";
import { AppBar as CustomAppBar, CustomDrawer } from "../../lib";
import { DrawerHeader } from "../../lib/CustomDrawer";
import { store } from "../../store";
import { showAlert } from "../../store/reducers/errorSlice";
import { login } from "../../store/reducers/loginSlice";
import { TOASTIFY_ERROR_FONTS } from "../../utils/constants";
import StatBox from "../../components/StatBox";
export default function TeacherDashboard() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const [allCourseData, setAllCourseData] = React.useState([]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar */}
      <CustomAppBar open={open} setOpen={setOpen} />
      <CustomDrawer open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <StatBox></StatBox>
        {/* Content */}
        <Grid container>
          <Grid
            item
            xs={7}
            sx={{
              p: 1,
            }}
          >
            {/* Greeting */}
            <FlexContainer
              sx={{
                mt: 12,
              }}
            ></FlexContainer>

            {/* Course Cards */}
            <Box
              sx={{
                mt: 2,
              }}
            >
              {allCourseData.map(
                ({ id, courseName, courseCategory, startDate }) => (
                  <HighlightedCourse
                    clickHandler={() =>
                      navigate(`/courses/${id}`, {
                        replace: true,
                      })
                    }
                    key={`highlighted-course-${id}`}
                    title={courseName}
                    category={courseCategory?.name}
                    startDate={startDate}
                  />
                )
              )}
            </Box>

            {/* Enrolled Courses */}
            <FlexContainer
              sx={{
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.grey[500],
                  fontSize: theme.typography.h4,
                }}
              >
                Enroll Courses
              </Typography>
              <Button
                sx={{
                  fontSize: theme.typography.button,
                }}
              >
                See All
              </Button>
            </FlexContainer>

            {/* Course Cards */}
            <Box
              sx={{
                mt: 2,
              }}
            >
              {HIGHLIGHTED_COURSES.map(({ id, title, category, startDate }) => (
                <HighlightedCourse
                  key={`highlighted-course-${id}`}
                  startDate={startDate}
                  title={title}
                  category={category}
                />
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              p: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                position: "sticky",
                top: "5rem",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
