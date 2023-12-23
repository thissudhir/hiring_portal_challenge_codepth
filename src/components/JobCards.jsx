import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const skills = ["javascript", "react", "node"];

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
    transition: ".3s",

    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #4D64E4",
    },
  },
  companyName: {
    fontSize: "13.5px",
    backgroundColor: "#18E1D9",
    padding: "6px",
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillBox: {
    marginRight: "4px",
    padding: "8px",
    borderRadius: "5px",
    fontSize: "14.5",
    transition: ".3s",
    fontWeight: 600,
    backgroundColor: "#0B0B15",
    color: "#fff",
  },
}));

const JobCards = () => {
  const classes = useStyles();
  return (
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Typography variant="subtitle1">Frontend </Typography>
          <Typography className={classes.companyName} variant="subtitle2">
            Microsoft{" "}
          </Typography>
        </Grid>
        <Grid item container xs>
          {skills.map((skill) => (
            <Grid key={skill} item className={classes.skillBox}>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container xs direction={"column"} alignItems={"flex-end"}>
          <Grid item>
            <Typography variant="caption">
              277 min ago | Full Time | Remote
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined">Check</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCards;
