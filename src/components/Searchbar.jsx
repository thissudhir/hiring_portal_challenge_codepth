import { Box, Button, Menu, MenuItem, Select } from "@mui/material";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});

const Searchbar = () => {
  const classes = useStyles();
  return (
    <Box py={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select disableUnderline variant="filled" defaultValue={"Full Time"}>
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
      </Select>
      <Select disableUnderline variant="filled" defaultValue={"Remote"}>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-Offcie">In-Offcie</MenuItem>
      </Select>

      <Button variant="contained" color="primary" disableElevation>
        Search
      </Button>
    </Box>
  );
};

export default Searchbar;
