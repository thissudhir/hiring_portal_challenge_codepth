// Header.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Link } from "react-router-dom";

const StyledNavbar = styled("div")({
  // marginTop: "20px",
  // padding: "20px 0",
  backgroundColor: "#f0f0f0",
  // textAlign: "center",
  position: "fixed",
  // bottom: 0,
  width: "100%",
});

const Navbar = () => {
  return (
    <Box bgcolor={"secondary.main"} color={"white"} py={10}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4">Job Listing</Typography>
            <Button variant="contained" color="primary" disableElevation>
              Post a job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // <StyledNavbar position="static">
    //   <Toolbar>
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       CodePath Joblisting
    //     </Typography>
    //     <Button color="inherit" to="/dashboard">
    //       Dashboard
    //     </Button>
    //     <Button color="inherit" to="/job-listings">
    //       Job Listings
    //     </Button>
    //     <Button color="inherit" to="/notification-history">
    //       Notifications
    //     </Button>
    //     {/* Add more buttons or navigation elements as needed */}
    //   </Toolbar>
    // </StyledNavbar>
  );
};

export default Navbar;
