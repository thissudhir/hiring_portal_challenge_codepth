// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Singup from "./components/Singup";
import JobListingCreation from "./components/JobListingCreation";
import JobDetails from "./components/JobDetails";
import JobApplicationForm from "./components/JobApplicationForm";
import Notifications from "./components/Notifications";
import NotificationsHistory from "./components/NotificationsHistory";
import ResponsesManagement from "./components/ResponsesManagement";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Grid } from "@mui/material";
import Searchbar from "./components/Searchbar";
import JobCards from "./components/JobCards";
// import Dashboard from './Dashboard';
// import { Theme } from "@mui/material";
// import JobListings from './JobListings';
// import NotificationHistory from './NotificationHistory';

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       //   {
//       //     path: "/",
//       //     element: <Login />,
//       //   },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <Singup />,
//       },
//       {
//         path: "/create_job_listing",
//         element: <JobListingCreation />,
//       },
//       {
//         path: "/job_details",
//         element: <JobDetails />,
//       },
//       {
//         path: "/job_application_form",
//         element: <JobApplicationForm />,
//       },
//       {
//         path: "/notifications",
//         element: <Notifications />,
//       },
//       {
//         path: "/notification_history",
//         element: <NotificationsHistory />,
//       },
//     ],
//   },
// ]);
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Searchbar />
          <JobCards />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
