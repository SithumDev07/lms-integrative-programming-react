import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MarkSelect() {
  const [grade, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grade}
          label="Grade"
          onChange={handleChange}
        >
          <MenuItem value={75}>A</MenuItem>
          <MenuItem value={65}>B</MenuItem>
          <MenuItem value={55}>C+</MenuItem>
          <MenuItem value={50}>C-</MenuItem>
          <MenuItem value={45}>D+</MenuItem>
          <MenuItem value={35}>Fail</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
