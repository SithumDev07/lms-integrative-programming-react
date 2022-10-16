import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ backgroundColor: theme.palette.grey[600] }}
          >
            {title}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant="h5"
          sx={{ backgroundColor: theme.palette.grey[600] }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ backgroundColor: theme.palette.grey[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}

export default StatBox;
