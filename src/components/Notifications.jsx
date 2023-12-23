// Notifications.jsx
import React, { useState, useEffect } from "react";
import { Typography, Snackbar } from "@mui/material";
import { database } from "../firebase";
const Notifications = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Listen for new job applications in the Firebase Realtime Database
    const unsubscribe = database
      .ref("jobApplications")
      .on("child_added", (snapshot) => {
        const application = snapshot.val();
        if (user && application) {
          // Show a notification to the user
          setMessage(
            `New job application received from ${application.applicantName}`
          );
          setOpen(true);
        }
      });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [user]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Typography sx={{ width: "100%" }} color="info" align="center">
        {message}
      </Typography>
    </Snackbar>
  );
};

export default Notifications;
