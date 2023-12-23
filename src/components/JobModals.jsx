import {
  Dialog,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
} from "@mui/material";
import React from "react";

const JobModals = () => {
  return (
    <Dialog>
      <DialogTitle>Post Job</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <FilledInput placeholder="Job title" disableUnderline />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default JobModals;
