// ResponsesManagement.jsx
import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
// import { RedirectFunction } from "react-router-dom";
import {
  Typography,
  Box,
  CircularProgress,
  List,
  ListItem,
} from "@mui/material";

// Assume you have a function to fetch job responses from the database
// Replace this with your actual data fetching logic
const fetchJobResponses = async (jobId) => {
  // Simulate an asynchronous API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Replace this with your actual data
      const responses = [
        {
          applicantName: "Applicant 1",
          email: "applicant1@example.com",
          resume: "resume_link_1",
        },
        {
          applicantName: "Applicant 2",
          email: "applicant2@example.com",
          resume: "resume_link_2",
        },
      ];
      resolve(responses);
    }, 1000); // Simulating a delay of 1 second
  });
};

const Redirect = redirect();
const ResponsesManagement = ({ user }) => {
  const { jobId } = useParams();
  const [jobResponses, setJobResponses] = useState(null);

  useEffect(() => {
    // Fetch job responses when the component mounts
    const fetchResponses = async () => {
      try {
        const responses = await fetchJobResponses(jobId);
        setJobResponses(responses);
      } catch (error) {
        console.error("Error fetching job responses:", error);
        // Handle error, e.g., redirect to an error page
      }
    };

    fetchResponses();
  }, [jobId]);

  // Redirect to login if user is not logged in
  if (!user) {
    return <Redirect to="/login" />;
  }

  if (!jobResponses) {
    // Display loading indicator while fetching job responses
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Responses for {`Job ${jobId}`}
      </Typography>
      {jobResponses.length === 0 ? (
        <Typography variant="body1">No responses yet.</Typography>
      ) : (
        <List>
          {jobResponses.map((response, index) => (
            <ListItem key={index}>
              <Typography variant="body1">
                <strong>Name:</strong> {response.applicantName},{" "}
                <strong>Email:</strong> {response.email},{" "}
                <strong>Resume:</strong> {response.resume}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default ResponsesManagement;
