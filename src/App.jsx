// App.jsx
import React, { useEffect, useState } from "react";
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
import { CircularProgress, Grid, Box } from "@mui/material";
import Searchbar from "./components/Searchbar";
import JobCards from "./components/JobCards";
import JobModals from "./components/JobModals";
// import { database } from "./firebase";
import { database } from "./firebase";
import {
  getDocs,
  collection,
  orderBy,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
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
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModal, setNewJobModal] = useState(false);

  const fetchJobs = async () => {
    try {
      const snapshot = await getDocs(
        collection(database, "jobListings"),
        orderBy("postedOn", "desc")
      );

      const jobListings = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        postedOn: doc.data().postedOn.toDate(),
      }));

      // console.log(jobListings);
      setJobs(jobListings);
      // return jobListings;
      setLoading(false);
    } catch (error) {
      console.error("Error fetching job listings:", error);
      throw error;
    }
  };

  const postJob = async (jobDetails) => {
    try {
      const newJob = await addDoc(collection(database, "jobListings"), {
        ...jobDetails,
        postedOn: serverTimestamp(),
      });
      fetchJobs();
      // console.log("Job posted successfully:", newJob.id);
    } catch (error) {
      console.error("Error posting job:", error);

      throw error;
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar openNewJobModal={() => setNewJobModal(true)} />
      <JobModals
        newJobModal={newJobModal}
        postJob={postJob}
        newCloseModal={() => setNewJobModal(false)}
      />
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <Searchbar />
          {loading ? (
            <Box display={"flex"} justifyContent={"center"}>
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((job) => <JobCards key={job.id} {...job} />)
          )}

          {/* <JobCards /> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
