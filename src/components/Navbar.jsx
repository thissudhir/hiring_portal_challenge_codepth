// Header.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledNavbar = styled("div")({
  backgroundColor: "#f0f0f0",
  position: "fixed",
  width: "100%",
});

const Navbar = ({ openNewJobModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // For example, you might call an authentication API and then update the state
    setIsLoggedIn(true);
  };

  return (
    <Box bgcolor={"secondary.main"} color={"white"} py={10}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4">Job Listing</Typography>
            {isLoggedIn && (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={openNewJobModal}
              >
                Post a job
              </Button>
            )}
            {!isLoggedIn && (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleLogin}
              >
                <Link
                  to={"/login"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
