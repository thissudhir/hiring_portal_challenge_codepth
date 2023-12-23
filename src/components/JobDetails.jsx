// JobDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Typography, Box, CircularProgress } from "@mui/material";

// Assume you have a function to fetch job details from the database
// Replace this with your actual data fetching logic
const fetchJobDetails = async (jobId) => {
  // Simulate an asynchronous API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Replace this with your actual data
      const jobDetails = {
        title: `Job Title ${jobId}`,
        description: `Job Description for Job ${jobId}. This is a sample job description.`,
      };
      resolve(jobDetails);
    }, 1000); // Simulating a delay of 1 second
  });
};

const Redirect = redirect();
const JobDetails = ({ user }) => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Fetch job details when the component mounts
    const fetchDetails = async () => {
      try {
        const details = await fetchJobDetails(jobId);
        setJobDetails(details);
      } catch (error) {
        console.error("Error fetching job details:", error);
        // Handle error, e.g., redirect to an error page
      }
    };

    fetchDetails();
  }, [jobId]);

  // Redirect to login if user is not logged in
  if (!user) {
    return <Redirect to="/login" />;
  }

  if (!jobDetails) {
    // Display loading indicator while fetching job details
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        {jobDetails.title}
      </Typography>
      <Typography variant="body1">{jobDetails.description}</Typography>
    </Box>
  );
};

export default JobDetails;
