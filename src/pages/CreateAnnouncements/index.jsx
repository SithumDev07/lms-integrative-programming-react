import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button, Grid } from '@mui/material';

function Announcements() {
    return (
        <div>
            <Box mt={3} ml={8} mr={8}>
                <Typography variant="h3" component="h3" mb={3} >
                    Create Announcement
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                //autoComplete="given-name"
                name="courseId"
                fullWidth
                id="courseId"
                label="Course ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="date"
                label="Date"
                name="date"
                //autoComplete="family-name"
              />
            </Grid>
           <Grid item xs={12}>
              <TextField
                fullWidth
                name="announcement"
                label="Announcement"
                multiline
                rows={7}
                id="outlined-multiline-static"
              />
            </Grid>

          </Grid>

            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                mt={3}
                >
                <Box mr={3}>
                <Button variant="outlined" m={3} p={3}>Clear</Button>
                </Box>
                <Button variant="outlined" m={3} p={3}>Post</Button>
                </Box>
                
            </Box> 

            
        </div>
                        )
}

export default Announcements