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

// Import statements...

const Navbar = ({ openNewJobModal }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // userData is the information about the logged-in user
    // For example, you might get this data after a successful login
    setUser(userData);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // For example, you might call an authentication API to sign the user out
    setUser(null);
  };

  return (
    <Box bgcolor={"secondary.main"} color={"white"} py={10}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h4">
              {" "}
              <Link
                to={"/"}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Job Listing
              </Link>
            </Typography>
            {user && (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={openNewJobModal}
              >
                Post a job
              </Button>
            )}
            {!user ? (
              <Link
                to={"/login"}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() =>
                    handleLogin({
                      /* user data here */
                    })
                  }
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;

// export default Navbar;
