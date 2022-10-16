import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button, Grid } from '@mui/material';
import CustomAppBar from '../../lib/AppBar';
import { CustomDrawer } from '../../lib';

function AnnouncementsMain() {
  const [open, setOpen] = React.useState(false);
    return (
      <div>
        <CustomAppBar open={open} setOpen={setOpen} />
        <CustomDrawer open={open} setOpen={setOpen} />
        <Box mt={3} ml={8} mr={8}>
          <Typography variant="h3" component="h3" mb={3}>
            Announcements
          </Typography>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            mt={3}
            mb={3}
          >
            <a href="">
              <Button variant="outlined" m={3} p={3}>
                Create Announcement
              </Button>
            </a>
          </Box>

          <TextField
            fullWidth
            name="announcement"
            label="Announcements"
            multiline
            rows={7}
            id="outlined-multiline-static"
          />
        </Box>
      </div>
    );
}

export default AnnouncementsMain