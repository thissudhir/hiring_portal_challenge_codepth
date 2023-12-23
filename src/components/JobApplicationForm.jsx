// JobApplicationForm.jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

// Assume you have a function to handle job applications
// Replace this with your actual application submission logic
const submitJobApplication = async (
  jobId,
  applicantName,
  applicantEmail,
  resume
) => {
  // Simulate an asynchronous API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Replace this with your actual submission logic
      const applicationResponse = {
        success: true,
        message: `Application submitted for Job ${jobId}`,
      };
      resolve(applicationResponse);
    }, 1000); // Simulating a delay of 1 second
  });
};

const JobApplicationForm = ({ jobId }) => {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [resume, setResume] = useState("");
  const [applicationResult, setApplicationResult] = useState(null);

  const handleApplicationSubmit = async () => {
    try {
      // Call the function to submit the job application
      const response = await submitJobApplication(
        jobId,
        applicantName,
        applicantEmail,
        resume
      );
      setApplicationResult(response);
    } catch (error) {
      console.error("Error submitting job application:", error);
      // Handle error, e.g., display an error message
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Apply for {`Job ${jobId}`}
      </Typography>
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={applicantName}
        onChange={(e) => setApplicantName(e.target.value)}
      />
      <TextField
        label="Your Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={applicantEmail}
        onChange={(e) => setApplicantEmail(e.target.value)}
      />
      <TextField
        label="Resume Link"
        variant="outlined"
        fullWidth
        margin="normal"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleApplicationSubmit}
      >
        Submit Application
      </Button>
      {applicationResult && (
        <Typography
          mt={2}
          color={applicationResult.success ? "success" : "error"}
        >
          {applicationResult.message}
        </Typography>
      )}
    </Box>
  );
};

export default JobApplicationForm;
