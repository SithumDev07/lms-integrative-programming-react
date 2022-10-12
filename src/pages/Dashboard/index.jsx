import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FlexContainer, GreetingHeader, HighlightedCourse } from '../../components';
import Calendar from '../../components/Calendar';
import { HIGHLIGHTED_COURSES } from '../../data/courses';
import { AppBar as CustomAppBar, CustomDrawer } from '../../lib';
import { DrawerHeader } from '../../lib/CustomDrawer';

export default function MiniDrawer() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

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
              }}>Courses</Typography>
              <Button sx={{
                fontSize: theme.typography.button
              }}>See All</Button>
            </FlexContainer>

            {/* Course Cards */}
            <Box sx={{
              mt: 2
            }}>
              {HIGHLIGHTED_COURSES.map(({ id, title, category }) => (
                <HighlightedCourse key={`highlighted-course-${id}`} title={title} category={category} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={5} sx={{
            p: 1
          }}>
            {/* Calendar */}
            <Box sx={{
              borderRadius: 2,
              overflow: 'hidden'
            }}>
              <Calendar />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
