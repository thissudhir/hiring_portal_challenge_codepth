// JobListingCreation.jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
// import { useHistory } from "react-router-dom";

const JobListingCreation = ({ user }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  // const history = useHistory();

  const handleCreateJobListing = () => {
    // Perform any validation if needed

    // For simplicity, let's assume we have a function to add the job listing to the database
    // You should replace this with your actual database integration
    const jobListingData = {
      title: jobTitle,
      description: jobDescription,
      createdBy: user.uid, // Assuming user object contains user information, adjust as needed
    };

    // Example function to add job listing to the database (replace with your actual database integration)
    // addJobListingToDatabase(jobListingData);

    // Redirect to job listings page after creating the job listing
    // history.push("/job-listings");
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Create a Job Listing
      </Typography>
      <TextField
        label="Job Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <TextField
        label="Job Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateJobListing}
      >
        Create Job Listing
      </Button>
    </Box>
  );
};

export default JobListingCreation;
