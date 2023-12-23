// NotificationsHistory.jsx
import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { database } from "../firebase";

const NotificationsHistory = ({ user }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notification history from the Firebase Realtime Database
    const fetchNotificationHistory = async () => {
      try {
        const snapshot = await database
          .ref(`users/${user.uid}/notifications`)
          .once("value");
        const notificationsData = snapshot.val();
        if (notificationsData) {
          // Convert notifications object to an array
          const notificationsArray = Object.keys(notificationsData).map(
            (key) => ({
              id: key,
              ...notificationsData[key],
            })
          );
          setNotifications(notificationsArray);
        }
      } catch (error) {
        console.error("Error fetching notification history:", error);
        // Handle error, e.g., redirect to an error page
      }
    };

    if (user) {
      fetchNotificationHistory();
    }

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      // Unsubscribe if needed
    };
  }, [user]);

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Notification History
      </Typography>
      {notifications.length === 0 ? (
        <Typography variant="body1">No notification history yet.</Typography>
      ) : (
        <List>
          {notifications.map((notification) => (
            <React.Fragment key={notification.id}>
              <ListItem>
                <ListItemText
                  primary={notification.jobTitle}
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        {notification.applicantName}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {new Date(notification.timestamp).toLocaleString()}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );
};

export default NotificationsHistory;
