import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FilledInput,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const initstate = {
  companyName: "",
  companyUrl: "",
  link: "",
  location: "Remote",
  postedOn: "",
  skills: [],
  title: "",
  type: "Full Time",
  description: "",
};
const JobModals = ({ postJob, newJobModal, newCloseModal }) => {
  const skills = ["javascript", "node", "angular", "vue", "java", "python"];
  const [loading, setLoading] = useState(false);
  const [JobDetails, setJobDetails] = useState(initstate);

  const handleChange = (event) => {
    setJobDetails((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await postJob(JobDetails);
    closeModal();
  };

  const addRemoveSkill = (skill) =>
    JobDetails.skills.includes(skill)
      ? setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s !== skill),
        }))
      : setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));

  const closeModal = () => {
    setJobDetails(initstate);
    setLoading(false);
    newCloseModal();
  };
  //   console.log(JobDetails);
  return (
    <Dialog open={newJobModal} fullWidth>
      <DialogTitle>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">Post Job</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name={"title"}
              value={JobDetails.title}
              autoComplete="off"
              placeholder="Job title *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name={"type"}
              value={JobDetails.type}
              fullWidth
              disableUnderline
              variant="filled"
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name={"companyName"}
              value={JobDetails.companyName}
              autoComplete="off"
              placeholder="Company name *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name={"companyUrl"}
              value={JobDetails.companyUrl}
              autoComplete="off"
              placeholder="Company URL *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name={"location"}
              value={JobDetails.location}
              fullWidth
              disableUnderline
              variant="filled"
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-Offcie">In-Offcie</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name={"link"}
              value={JobDetails.link}
              placeholder="Job Link *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              name={"description"}
              value={JobDetails.description}
              placeholder="Job description *"
              disableUnderline
              fullWidth
              rows={4}
              multiline
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box>
            {" "}
            {skills.map((skill) => {
              return (
                <Chip
                  style={{
                    backgroundColor: JobDetails.skills.includes(skill)
                      ? "#0B0B15"
                      : "inherit",
                    color: JobDetails.skills.includes(skill)
                      ? "#fff"
                      : "inherit",
                  }}
                  onClick={() => addRemoveSkill(skill)}
                  label={skill}
                  key={skill}
                  variant="outlined"
                />
              );
            })}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography variant="caption" color={"red"}>
            {" "}
            * Required
          </Typography>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            disableElevation
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              "Post Job"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default JobModals;
