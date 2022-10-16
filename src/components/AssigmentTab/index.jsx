import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { dark } from "@mui/material/styles/createPalette";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));
const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function AssigmentTab() {
  return (
    <Grid container spacing={2}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={10} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 1,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 3,
              }}
            >
              {[0, 1, 2, 3, 4, 6].map((Assigment) => (
                <Item key={Assigment} Assigment={Assigment}>
                  {`Assigment=${Assigment}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
