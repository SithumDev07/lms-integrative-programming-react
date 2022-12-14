import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseService from '../../api/service/CourseService';
import { FlexContainer, GreetingHeader, HighlightedCourse } from '../../components';
import Calendar from '../../components/Calendar';
import { HIGHLIGHTED_COURSES } from '../../data/courses';
import { AppBar as CustomAppBar, CustomDrawer } from '../../lib';
import { DrawerHeader } from '../../lib/CustomDrawer';
import { store } from '../../store';
import { showAlert } from '../../store/reducers/errorSlice';
import { login } from '../../store/reducers/loginSlice';
import { TOASTIFY_ERROR_FONTS } from '../../utils/constants';
import { useSelector } from "react-redux";

export default function Dashboard() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const [allCourseData, setAllCourseData] = React.useState([])

  const accessToken = useSelector((state) => state.login.accessToken)

  useEffect(() => {

    console.log("here ", accessToken);

    (async () => {
      let config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      }
      let response = await CourseService.getAllCourses(config)
      if (response.status === 202) {
        setAllCourseData(response.data)
      }
    })();
  }, [accessToken])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar */}
      <CustomAppBar open={open} setOpen={setOpen} />
      <CustomDrawer open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {/* Content */}
        <Grid container>
          <Grid item xs={7} sx={{
            p: 1
          }}>
            {/* Greeting */}
            <GreetingHeader />
            <FlexContainer sx={{
              mt: 4
            }}>
              <Typography sx={{
                color: theme.palette.grey[500],
                fontSize: theme.typography.h4
              }}>New & Recommended</Typography>
              <Button sx={{
                fontSize: theme.typography.button
              }} onClick={() => {
                store.dispatch(showAlert({
                  shouldShow: true,
                  message: "Heyyyyy",
                  type: TOASTIFY_ERROR_FONTS.WARNING,
                  autoClose: 400
                }));

                store.dispatch(login({
                  isLoggedIn: true,
                  userId: 1,
                  name: "Sithum Basnyaka",
                  email: 'sithum@gmail.com',
                  userRole: "ADMIN",
                  lastLoggedIn: new Date().toUTCString(),
                }))
              }}>See All</Button>
            </FlexContainer>

            {/* Course Cards */}
            <Box sx={{
              mt: 2,
            }}>
              {allCourseData.map(({ id, courseName, courseCategory, startDate }) => (
                <HighlightedCourse clickHandler={() => navigate(`/courses/${id}`, {
                  replace: true
                })} key={`highlighted-course-${id}`} title={courseName} category={courseCategory?.name} startDate={startDate} />
              ))}
            </Box>

            {/* Enrolled Courses */}
            <FlexContainer sx={{
              mt: 4
            }}>
              <Typography sx={{
                color: theme.palette.grey[500],
                fontSize: theme.typography.h4
              }}>Enrolled Courses</Typography>
              <Button sx={{
                fontSize: theme.typography.button
              }}>See All</Button>
            </FlexContainer>

            {/* Course Cards */}
            <Box sx={{
              mt: 2,
            }}>
              {HIGHLIGHTED_COURSES.map(({ id, title, category, startDate }) => (
                <HighlightedCourse key={`highlighted-course-${id}`} startDate={startDate} title={title} category={category} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={5} sx={{
            p: 1
          }}>
            <Box sx={{
              borderRadius: 2,
              overflow: 'hidden',
              position: 'sticky',
              top: '5rem'
            }}>
              <Calendar />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
