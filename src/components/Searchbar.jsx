import { Box, Button, MenuItem, Select, styled } from "@mui/material";
import React from "react";

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  display: "flex",
  boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  "& > *": {
    flex: 1,
    height: "45px",
    margin: "8px",
  },
});

const Searchbar = () => {
  return (
    <Wrapper py={2} mt={-5} mb={2}>
      <Select disableUnderline variant="filled" defaultValue={"Full Time"}>
        <MenuItem value="Full Time">Full Time</MenuItem>
        <MenuItem value="Part Time">Part Time</MenuItem>
      </Select>
      <Select disableUnderline variant="filled" defaultValue={"Remote"}>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-Office">In-Office</MenuItem>
      </Select>

      <Button variant="contained" color="primary" disableElevation>
        Search
      </Button>
    </Wrapper>
  );
};

export default Searchbar;
