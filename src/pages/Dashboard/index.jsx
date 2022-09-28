import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

function Dashboard() {
  useEffect(() => {
    toast("Dashboard");
  }, []);

  return (
    <div>
      <div
        className="h-screen w-screen flex items-center justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <Typography variant="h3" component="h1">
          LMS Integrative Programming
        </Typography>
      </div>
    </div>
  );
}

export default Dashboard;
